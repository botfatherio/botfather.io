---
title: Match Type
---

Objects of type `Match` are usually returned by Botfather Api methods. Matches describe where something has been found and how _good_ the match is.

## Match object instanciation

You can create your own matches i.e. for custom match methods. An invalid match can be created passing nothing to the matches constructor; its score will be **-**1.0. To create an valid `Match` one has to provide a [Rect](../rect/) describing the matches location and the matches score. The matches score tells how _good_ the match is. _1.0_ meaning the match matches the searched object 100% and 0.0 meaning the match isn't even valid. (1.0 = 100%, 0.5 = 50%, 0.35 = 35%).

- `var invalid_match = new Match();`
- `var good_match = new Match(new Rect(40, 75, 100, 100), 0.97);`

## Match object methods

---

##### `Match.getScore();`

Returns the matches score. The score describes how good the match matches what has been searched for. A score of 0.0 means the match matches the subject 0%. 0.42 means the match matches 42% and 1.0 means the match matches 100%.

##### `Match.setScore(new_score);`

- `new_score` (number): A float number between 0.0 (0%) and 1.0 (100%).

Sets the matches score to `new_score`.

##### `Match.getRect();`

Returns where the match matches the object searched for.

##### `Match.setRect(new_rect);`

- `new_rect` ([Rect](../rect)): The rect describing where the match matches the searched for object.

Sets the matches matching location/rect to `new_rect`.

##### `Match.isValid();`

Returns true if the matches score is greater than 0.0.
