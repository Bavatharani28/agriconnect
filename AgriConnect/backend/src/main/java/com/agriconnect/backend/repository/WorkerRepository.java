package com.agriconnect.backend.repository;

import com.agriconnect.backend.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WorkerRepository extends JpaRepository<Worker, Integer> {

    List<Worker> findBySkillAndLocationAndAvailability(
            String skill,
            String location,
            Boolean availability
    );
    @Query("""
SELECT w FROM Worker w
WHERE LOWER(w.skill) = LOWER(:skill)
AND LOWER(w.location) = LOWER(:location)
AND w.availability = :availability
""")
    List<Worker> findMatchingWorkers(
            @Param("skill") String skill,
            @Param("location") String location,
            @Param("availability") Boolean availability
    );
}