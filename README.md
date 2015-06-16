## Cold Remedies

I'm super sick, y'all. (Sorry! I'll do my best to back on Wednesday.) You can help me recover faster by building an application so I can remember what the most effective cold remedies are, and suggesting your own.

In addition to the standard `public` folder, the node.js application provided has three, already-created AJAX routes that return JSON data:

* **GET** `/remedy` - Returns metadata about all cold remedies in the system (with `description` and `reactions` fields omitted)
* **GET** `/remedy/:id` - Returns all data about a specific cold remedy (so `http://localhost:3000/remedy/1` will return data about Ginseng Root, etc)
* **PUT** `/remedy` - Creates a new remedy in the system from the data that's sent in with the request; returns all data about that new remedy.

All remedies contain the following fields:

* `name` -- Name of the remedy
* `treatment` -- On a scale of 0-3 (3 being most effective), how useful the remedy is at treating symptoms of existing colds.
* `prevention` -- On a scale of 0-3 (3 being most effective), how useful the remedy is at preventing future colds.
* `description` -- (Positive) description of the remedy.
* `reactions` -- Information about possible side effects.

In addition, there's a `id` property that uniquely identifies the specific remedy.

For `treatment` and `prevention`, the scale can be transliterated as:

* **0**: Ineffective.
* **1**: Unlikely to be effective.
* **2**: Possibly effective.
* **3**: Probably effective.

## Normal Mode

Write an application that 

1. Lists the available cold remedies in the system (requested via AJAX). Displays the name of the remedy and some visual indicator of its effectiveness at treatment and prevention -- **not** the numbers 0-3 but some wording and/or color indicator.
2. Lets the user click on a remedy and see additional details about that remedy (retrieved via AJAX as well). The list should not be visible at this time, just the specified remedy.
3. Lets the user, when viewing a specific remedy, return to the "list" view by clicking some sort of "Back" button or div.

## Hard Mode

In addition to normal mode, write the application so that the user is able to suggest additional remedies in the system. They should be able to give their remedies a name, description, reactions, as well as treatment effectiveness and prevention effectiveness scores on the same scale.

That remedy should be able to be submitted, as the `data` property, via the AJAX **PUT** route. (`id` will be assigned programmatically by the server.)

**Note:** Any data sent to the node application will **not** persist between server restarts.