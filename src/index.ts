/*
* This program is a vehicle class.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-25
*/

import { Truck } from './Truck'
import { Bike } from './Bike'

const moutin = new Bike('white', 40)

console.log('Created moutin bike.\nStatus:\n')
moutin.status()

console.log('Set the cadense to 10\n')
moutin.cadense = 10
moutin.status()

console.log('\nAccelerate by 15:')
moutin.accelerate(15)
moutin.status()

console.log('\nRing bell.')
moutin.ringBell()

console.log('\nReturn number of tires:')
console.log(moutin.tireNum)

const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nApplyed air pressure of 10:')
bigTruck.applyAir(10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nReturn number of tires:')
console.log(bigTruck.tireNum)

console.log('\nDone.')
