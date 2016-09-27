# Angular 2 Infinite Scroll Directive

Bare bones infinite scroll directive for Angular 2

## Usage

First, import the InfiniteScroll directive to your module:

```typescript
import {InfiniteScroll} from '../directives/fit-text';
...
@NgModule({
  imports: [...],
  exports: [...],
  declarations: [InfiniteScroll, ...]
})
...
```

Then you it in a component:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <div infiniteScroll
        (onScroll)="onScroll()">
      </div>
    `
})
export class AppComponent {
  onScroll () {
    console.log('scrolled!')
  }
}
```

Add an optional offset, to trigger EventEmitter before reaching the bottom.

```typescript
<div [infiniteScroll]=400
  (onScroll)="onScroll()">
  ...
</div>
```
