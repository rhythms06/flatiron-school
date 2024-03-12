/*
    Phase 1 -> Scuber
    Sakib Rasul
    Updated March 12, 2024
    Created August 1, 2023

    Core Deliverables
    1. Complete the following helper functions for a ridesharing service that operates
       between blocks in Manhattan.   
*/

// This function takes a block number and returns its distance in blocks from Block 42.
function distanceFromHqInBlocks(pickupBlock) {
    // Math.abs(x) returns the absolute value of x.
    return Math.abs(pickupBlock - 42);
}

// This function takes a block number and returns its distance in feet from Block 42.
function distanceFromHqInFeet(pickupBlock) {
    // Since we know each block spans 264ft., we can multiply the block distance by 264.
    return distanceFromHqInBlocks(pickupBlock) * 264;
}

// This function takes two block numbers and returns the distance between the two in feet.
function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

// This function takes two block numbers and returns the fare for travelling from one to the other.
//  (a) Rides up to 400ft. are free of charge.
//  (b) Rides longer than 400 and up to 2000ft. cost $0.02 per foot.
//  (c) Rides longer than 2000 and up to 2500ft. cost $25.
//  (d) Rides longer than 2500ft. are rejected.
function calculatesFarePrice(start, end) {
    // First, let's calculate the number of feet between the starting and ending blocks.
    const distance = distanceTravelledInFeet(start, end);
    // Next, let's handle cases (a)-(d) and return the right fare.
    // Note: You don't need to (but can) wrap single-line bodies in { curly braces }.
    // Tip: Riders should fall into one and only one of cases (a)-(d), so make sure your
    //      if statements are non-overlapping! 
    // (a) Rides up to 400ft. are free of charge.
    if (distance <= 400) return 0;
    // (b) Rides longer than 400 and up to 2000ft. cost $0.02 per foot.
    if (distance > 400 && distance <= 2000) return (distance - 400) * 0.02;
    // (c) Rides longer than 2000 and up to 2500ft. cost $25.
    if (distance > 2000 && distance < 2500) return 25;
    // (d) Rides longer than 2500ft. are rejected.
    if (distance >= 2500) return "cannot travel that far";
}