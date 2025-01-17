# Save

This is an helper method to save (insert / update) `ActiveModel` into database.

## Save Behaviour

When saving an `ActiveModel`, it will perform either insert or update depends on the primary key attribute:

- Insert if primary key is `Unset` (or `Unchanged`)
- Update if primary key is `Set`

## Usage

Calling `save` to insert or update an `ActiveModel`.

```rust
let banana = fruit::ActiveModel {
    id: Unset(None), // unset primary key explicitly
    name: Set("Banana".to_owned()),
    ..Default::default() // all other attributes are `Unset`
};

// Insert, because primary key `id` is `Unset`
let mut banana = banana.save(db).await?;

banana.name = Set("Banana Mongo".to_owned());

// Update, because primary key `id` is `Set`
let banana = banana.save(db).await?;
```
