require_relative('../lib/connection')

class Sheep < ActiveRecord::Base

def give_birth(num)
    num.times do |i|
        if rand < 0.5
            x = "Male"
        else
            x = "Female"
        end
        Sheep.create({name: "#{i+1}", age: 0, sex: "#{x}", breed: "#{self.breed}"})
        end
    end

    
end
