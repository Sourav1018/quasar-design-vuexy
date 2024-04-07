# Table Of Content

- Defination
- Usage of the component
- Requirments to run the component.

## Defination

MenuAccordian is a single menu list accordian, here we can render the menu with some list.
Basic component used for this is [Expansion Item](https://quasar.dev/vue-components/expansion-item) from Quasar framework.

### Usage of the component

---

We have to pass a structure props to the component from the parent.

```html
<MenuAccordion v-bind="Object_Variable" />
```

1. **Object_Variable** is the `variable` name which is create in parent component inside script function.

   - The `variable` structure goes like:

   ```JavaScript
   const accordionList = {
      section: "apps and pages",
      expansions: [
        {
          icon: "mdi-calendar-clock-outline",
          label: "Attendance",
          items: [
            {
              icon: "mdi-circle-outline",
              label: "In & Out",
            },
            {
              icon: "mdi-circle-outline",
              label: "Holidays",
            },
            {
              icon: "mdi-circle-outline",
              label: "Leave Apply",
            },
          ],
        },
      ],
    };
   ```

   This is the basic simple structure to render the **MenuAccordion**.
