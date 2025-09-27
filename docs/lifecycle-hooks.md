# Lifecycle hooks

code here: https://github.com/BosH9/angular-csr/tree/life-cyle-hooks

A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction. Each step represents a different part of Angular's process for rendering components and checking them for updates over time.

### ngOnInit

Once Angular sets the component’s inputs, it triggers ngOnInit. This hook is used for initialization tasks that only need to run once when the component is created, such as fetching data from an API or setting up initial configurations

For example

Let’s consider a dashboard component that loads user data when it’s first initialized. Here’s how ngOnInit helps you ensure data fetching occurs at the right moment:

```
export class DashboardComponent implements OnInit {  
  userData: any;  

  ngOnInit() {  
	console.log('Component initialized!');  
	this.fetchUserData();  
  }  

  fetchUserData() {  
	// Logic to fetch user data from an API  
  }  
}  
```

By placing the API call in ngOnInit, you ensure that the data fetching logic runs once, right after the component has been fully initialized. It’s a good idea to use ngOnInit for tasks such as fetching data, setting default values, or preparing resources.

Just be cautious not to put long-running operations here, as that could delay the component's rendering.

Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).

### ngOnChanges

This lifecycle hooks runs whenever the component input values are changed.

Imagine you have a product detail component in an e-commerce app, where the parent component passes a product object as an input. If the user switches to a different product, you need the child component to immediately reflect the new product data.

```
export class ProductComponent implements OnChanges {
  @Input() product: any;

  ngOnChanges(changes: SimpleChanges) {
	if (changes['product']) {
  	console.log('Product changed to: ', changes['product'].currentValue);
  	this.updateProductDetails();
	}
  }

  updateProductDetails() {
	// Logic to update product details based on the new product input
  }
}
```

In this example, ngOnChanges detects changes to the product input and triggers logic to update the component accordingly.

Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.

### ngDoCheck

Angular’s default change detection mechanism works well in most cases, but there are times when you need to manually check for changes that Angular might miss—such as when dealing with deeply nested objects.

in some cases, the ngOnChanges is not enough to detect all changes because it uses the property reference to check the difference, so it can’t detect the changes if you update the object property.

Meanwhile, the ngDoCheck lifecycle hook allows us to perform our custom change detection so we can bypass the ngOnChange lifecycle hook limitations.

For example, if you pass a User Object from the parent component then you update the age or the username property of the User object, in this case the Angular will not fire the event to dispatch the ngOnChange callback. Because it has the same reference of the User object.

by using ngDoCheck , we can use more advanced tools like key-value differs and iterable differs services to perform custom change detections.

check this little example :

```
  //child-component.ts
import {Component, DoCheck, Input, KeyValueDiffers, OnInit} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit, DoCheck {

  @Input() user: any;

  changelogList: Array<string> = [];

  differ: any;

  constructor(private differs: KeyValueDiffers) {
  }

  ngOnInit() {
    this.differ = this.differs.find(this.user).create();
  }


  ngDoCheck() {
    const userChanges = this.differ.diff(this.user);
    if (userChanges) {
      userChanges.forEachChangedItem((changeRecord: any) => {
        this.changelogList.push('item changed : ' + changeRecord.key + ' ' + JSON.stringify(changeRecord.currentValue))
      });
      userChanges.forEachAddedItem((changeRecord: any) => {
        this.changelogList.push('item added : ' + changeRecord.key + ' ' + JSON.stringify(changeRecord.currentValue))
      });
    }
  }
}
```

Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.

### ngAfterContentInit

A lifecycle hook that is called after Angular has fully initialized all content of a directive. It will run only once when the projected content is initialized. Define an ngAfterContentInit() method to handle any additional initialization tasks.

The afterContentInit function gets called when the external component content has been initialized (Careful, initialized! Not rendered).

Called once after the first ngDoCheck().

### ngAfterContentChecked

A lifecycle hook that is called after the default change detector has completed checking all content of a directive. It will run after the content has been checked and most of the time it's during a change detection cycle.

In other words, the ngAfterContentChecked() is an Angular lifecycle hook that is called each time after Angular has checked and updated the component's projected content.

After firing the AfterContentInit() Angular will fire another callback: AfterContentChecked(). This life-cycle is being fired after Angular has finished checking all the component's reference stuff (Input, Output, DI, and so on).

Called after ngAfterContentInit() and every subsequent ngDoCheck().

### ngAfterViewInit

A lifecycle hook that is called after Angular has fully initialized a component's view. Define an ngAfterViewInit() method to handle any additional initialization tasks.

Called once after the first ngAfterContentChecked().

### ngAfterViewChecked

A lifecycle hook that is called after the default change detector has completed checking a component's view for changes.

Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

### ngOnDestroy

Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.

Called immediately before Angular destroys the directive or component.

![image](https://github.com/user-attachments/assets/7250df70-2765-447a-be7b-7992dac5c10d)
