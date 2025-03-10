# botany-game
An interactive plant care game written with HTML, CSS, and Javascript. Try out your green thumb without killing real plants at home!

## game planning

1. you begin with an easy care/level 1 plant (snake plant), you are given 3 choices of light to place it in. All three options are correct for level 1 plant, so plant is added to your collection

2. you are then promped to water the plant a lot, a little, or not at all. Again, all three are correct for a level 1

3. so you next recieve a level 2 plant. Again options for light, this time only med and bright lights are acceptable, if correct, add plant to collection and move on to water question. if false, then you kill the plant and start over receiving another level 1 plant.

4. once you add a level 2 plant successfully to your collection, you receive a level 3 plant. Options for light (most strict, only medium acceptable) then options for water (only a little is acceptable). if false, go back to level 1 plant. if all correct, add plant to collection and say you won!

5. Later add: do you want to continue playing? then options to visit shelf, start back at level 1, or reset and go back to level 1

** every time you receive a plant, water is subtracted by 1 from all plants in collection (time passing)

** at any point you can visit plant shelf and: water plants (too much will kill plant, back to start receiving plants) or sell clippings (subtract from plant health, add to coins) then button for back to home

** if any plant water level lowers to lowest level in range, alert player that the plant is wilting, direct to visit plant shelf button