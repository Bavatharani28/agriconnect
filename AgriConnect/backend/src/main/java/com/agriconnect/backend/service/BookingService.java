package com.agriconnect.backend.service;

import com.agriconnect.backend.entity.Booking;
import com.agriconnect.backend.entity.Worker;
import com.agriconnect.backend.repository.BookingRepository;
import com.agriconnect.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.agriconnect.backend.exception.ResourceNotFoundException;
import java.time.LocalDateTime;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private WorkerRepository workerRepository;

    public Booking createBooking(Booking booking) {

        booking.setBookingDate(LocalDateTime.now());

        if (booking.getStatus() == null) {
            booking.setStatus("CONFIRMED");
        }

        Booking savedBooking = bookingRepository.save(booking);

        Worker worker = workerRepository.findById(booking.getProviderId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Worker not found"));
        worker.setAvailability(false);
        workerRepository.save(worker);

        return savedBooking;
        
    }
}