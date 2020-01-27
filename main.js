alert(
  "Hey there! This is a story about Alicia and where she wants to travel. Click here to begin the story!"
)

var goOnTrip = confirm(
  "Alicia is thinking about going on a trip with her friend Elaina. Do you think she should go? Press OK to see her take a trip!"
)

if (goOnTrip == true) {
  // she goes on a trip
  var car = confirm(
    "Alright, her and Elaina are going on a trip! They decided to go to Mexico, but they aren't sure whether to rent a car or not. Press OK if you want them to get a car"
  )

  if (car == true) {
    var fourwheel = confirm(
      "Well, that's probably a good call. She wouldn't have as much fun walking the whole time. Do you think she should get 4 wheel drive just in case? Press ok to get a solid truck or cancel if you think she should get a gas sipper."
    )
    if (fourwheel == true) {
      alert(
        "Good call! Most of the cool spots in her area had rough roads and she was able to get there. She had a sick trip driving around the mountains with her friends. THE END!"
      )
    } else {
      alert(
        "Wellllllllll, you probably should have gotten the truck. Turns out the roads are rough out in those parts and she got stranded in the middle of nowhere. This trip turned out to be a real boondoggle! Whoops. THE END!"
      )
    }
  }
  if (car == false) {
    var bus = confirm(
      "Ok, this might get interesting. She's gonna have to get around somehow though. Press ok if you want her to take the bus and still have a chance of getting somewhere. Or press cancel if you want her to wander around aimlessly."
    )
  }
  if (bus == true) {
    alert(
      "Good call! Taking the bus was awesome. It was a chill ride, she made a bunch of friends, went to a sick hostel and had the trip of her life! THE END!"
    )
  }
  if (bus == false) {
    alert(
      "Well, I kind of warned you. She didn't rent a car, and she didn't take the bus. So she spent her whole trip hanging around the airport and just walking around aimlessly. Lame trip! THE END!"
    )
  }
} else if (goOnTrip == false) {
  var atHome = confirm(
    "Well, I guess she's just gonna stay at home. This might get kinda boring. I think now the best plan is just to take a nap. Press ok if you want her to take a nap. Otherwise press cancel and she can do some shopping instead."
  )
  if (atHome == true) {
    alert(
      "Well, this a pretty boring end to the story But, she's asleep now and that's that. You probably should have sent her on a trip if you wanted a more adventurous story, DOOD! THE END"
    )
  } else if (atHome == false) {
    alert(
      "Alicia ended up going on the greatest shopping adventure the world has ever known! Man, she's so lucky she didn't go on that Mexico trip. You really hooked her up by choosing this option! THE END!"
    )
  }
}
