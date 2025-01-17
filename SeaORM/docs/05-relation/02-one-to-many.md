# One to Many

An one-to-many relation is similar to one-to-one relation. In previous section we give the example of "a `Cake` entity has at most one `Fruit` topping". In one-to-many relation we change the "at most one" constraint. So, we have a `Cake` entity might have many `Fruit` toppings.

## Defining the Relation

This is almost identical to defining an one-to-one relation, the only different is that we use `Entity::has_many()` method here.

```rust {9,15,20} title="entity/cake.rs"
#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
pub enum Column {
    Id,
    Name,
}

#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Fruit,
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),
        }
    }
}

impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}
// ...
```

## Defining the Inverse Relation

It is the same as defining the one-to-one inverse relation.

```rust {10,16,24} title="entity/fruit.rs"
#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
pub enum Column {
    Id,
    Name,
    CakeId,
}

#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Cake,
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Cake => Entity::belongs_to(super::cake::Entity)
                .from(Column::CakeId)
                .to(super::cake::Column::Id)
                .into(),
        }
    }
}

impl Related<super::cake::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Cake.def()
    }
}
// ...
```
