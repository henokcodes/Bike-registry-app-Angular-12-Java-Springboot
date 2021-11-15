package com.phoenix.bike.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phoenix.bike.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
