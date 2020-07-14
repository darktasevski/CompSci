# Head First Design Patterns

[[toc]]

[toc]

> Notes on Eric Freeman' and Elisabeth Robson' "Head First Design Patterns". But with Javascript examples, and additional notes from other sources.

---

Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blue- prints that you can customize to solve a recurring design prob- lem in your code.

All patterns can be categorized by their _intent_, or purpose.

-   **Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.
-   **Structural patterns** explain how to assemble objects and class- es into larger structures, while keeping the structures flexible and efficient.
-   **Behavioral patterns** take care of effective communication and the assignment of responsibilities between objects.

---

## Creational Design Patterns

Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## The Factory Pattern

### Factory pattern resources

-   [Factory Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)

---

## Structural Design Patterns

Structural Design Patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

---

## Behavioral Design Patterns

Behavioral Design Patterns are concerned with algorhitms and the assignment of responsibilities between objects.

### Strategy Pattern

> also known as the **Policy pattern**.

**The Strategy pattern** suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called `strategies`. The original class, called `context`, must have a field for stor- ing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

The context isn't responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn't know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.

This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.

> The strategy pattern is a behavioral design pattern that enables selecting an algorithm at runtime.
>
> -   [Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)

The Strategy Pattern has several advantages:

-   It's easy to switch between different algorithms (strategies) in runtime because you're using polymorphism in the interfaces.
-   Clean code because you separate the concerns into classes (a class to each strategy) thus avoid conditional-infested code.

#### When to Use the Strategy Pattern

-   When you need to use several algorithms with different variations. You need create a concrete class to implement your algorithm (which can consist of a or some functions).
-   When there are conditional statements around several related algorithms.
-   When most of your classes have related behaviors.

#### Pseudocode

```ts
// The strategy interface declares operations common to all supported versions of some algorithm.
// The context uses this interface to call the algorithm defined by the concrete strategies.
interface Strategy is
	method execute(a, b)

// Concrete strategies implement the algorithm while following the base strategy interface.
//  The interface makes them interchangeable in the context.
class ConcreteStrategyAdd implements Strategy is
	method execute(a, b)
		is return a + b

class ConcreteStrategySubtract implements Strategy is
	method execute(a, b) is
		return a - b

class ConcreteStrategyMultiply implements Strategy is
	method execute(a, b) is
		return a * b

// The context defines the interface of interest to clients.
class Context is
	// The context maintains a reference to one of the strategy objects.
	// The context doesn't know the concrete class of a strategy.
	// It should work with all strategies via the strategy interface.
	private strategy: Strategy

	// Usually the context accepts a strategy through the constructor,
	// and also provides a setter so that the strategy can be switched at runtime.
	method setStrategy(Strategy strategy) is
		this.strategy = strategy

	// The context delegates some work to the strategy object instead of
	// implementing multiple versions of the algorithm on its own.
	method executeStrategy(int a, int b) is
		return strategy.execute(a, b)

	// The client code picks a concrete strategy and passes it to the context.
	//  The client should be aware of the differences between strategies in order to make the right choice.
	class ExampleApplication is
		method main() is

		Create context object.

		Read first number.
		Read last number.
		Read the desired action from user input.

		if (action == addition) then
			context.setStrategy(new ConcreteStrategyAdd())

		if (action == subtraction) then
			context.setStrategy(new ConcreteStrategySubtract())

		if (action == multiplication) then
			context.setStrategy(new ConcreteStrategyMultiply())

		result = context.executeStrategy(First number, Second number)

		Print result.
```

#### Examples

Strategy Manager:

```js
class StrategyManager {
	constructor() {
		//  represents the strategy used
		this.strategy = null;
	}

	get strategy() {
		return this.strategy;
	}

	set strategy(strategy) {
		this.strategy = strategy;
	}
	// The method doAction will be implemented in each concrete strategy
	doSomething() {
		this.strategy.doSomething();
	}
}

class StrategyA {
	doSomething() {
		console.log('StrategyA implementation');
	}
}

class StrategyB {
	doSomething() {
		console.log('StrategyB implementation');
	}
}

const strategyManager = new StrategyManager();
const strategyA = new StrategyA();
const strategyB = new StrategyB();

strategyManager.strategy = strategyA;
strategyManager.doSomething();

strategyManager.strategy = strategyB;
strategyManager.doSomething();
```

Greeter:

```js
// Greeter is a class of object that can greet people.
// It can learn different ways of greeting people through 'Strategies.'

// This is the Greeter constructor.
const Greeter = function (strategy) {
	this.strategy = strategy;
};

// Greeter provides a greet function that is going to
// greet people using the Strategy passed to the constructor.
Greeter.prototype.greet = function () {
	return this.strategy();
};

// Since a function encapsulates an algorithm, it makes a perfect
// candidate for a Strategy.

// Here are a couple of Strategies to use with our Greeter.
const politeGreetingStrategy = function () {
	console.log('Hello.');
};

const friendlyGreetingStrategy = function () {
	console.log('Hey!');
};

const boredGreetingStrategy = function () {
	console.log('sup.');
};

// Let's use these strategies!
const politeGreeter = new Greeter(politeGreetingStrategy);
const friendlyGreeter = new Greeter(friendlyGreetingStrategy);
const boredGreeter = new Greeter(boredGreetingStrategy);

politeGreeter.greet(); //=> Hello.
friendlyGreeter.greet(); //=> Hey!
boredGreeter.greet(); //=> sup.
```

Sorting Strategy:

```ts
// interface all sorting algorithms must implement
interface SortingStrategy {
	sort(array);
}
// heap sort algorithm implementing the `SortingStrategy` interface, it implements its algorithm in the `sort` method
class HeapSort implements SortingStrategy {
	sort() {
		log('HeapSort algorithm');
	}
}
// linear search sorting algorithm implementing the `SortingStrategy` interface, it implements its algorithm in the `sort` method
class LinearSearch implements SortingStrategy {
	sort(array) {
		log('LinearSearch algorithm');
	}
}
class SortingProgram {
	private sortingStrategy: SortingStrategy;
	constructor(array: Array<Number>) {
		this.array = array;
	}
	runSort(sortingStrategy: SortingStrategy) {
		return this.sortingStrategy.sort(this.array);
	}
}
// instantiate the `SortingProgram` with an array of numbers
const sortProgram = new SortingProgram([9, 2, 5, 3, 8, 4, 1, 8, 0, 3]);
// sort using heap sort
sortProgram.runSort(new HeapSort());
// sort using linear search
sortProgram.runSort(new LinearSearch());
```

Car Wash program:

```ts
// Steve Fenton's example Car Wash program
interface BodyCleaning {
	clean(): void;
}
interface WheelCleaning {
	clean(): void;
}
class BasicBodyCleaningFactory implements BodyCleaning {
	clean() {
		log('Soap Car');
		log('Rinse Car');
	}
}
class ExecutiveBodyCleaningFactory implements BodyCleaning {
	clean() {
		log('Wax Car');
		log('Blow-Dry Car');
	}
}
class BasicWheelCleaningFactory implements BodyCleaning {
	clean() {
		log('Soap Wheel');
		log('Rinse wheel');
	}
}
class ExecutiveWheelCleaningFactory implements BodyCleaning {
	clean() {
		log('Brush Wheel');
		log('Dry Wheel');
	}
}
class CarWash {
	washCar(washLevel: Number) {
		switch (washLevel) {
			case 1:
				new BasicBodyCleaningFactory().clean();
				new BasicWheelCleaningFactory().clean();
				break;
			case 2:
				new BasicBodyCleaningFactory().clean();
				new ExecutiveWheelCleaningFactory().clean();
				break;
			case 3:
				new ExecutiveBodyCleaningFactory().clean();
				new ExecutiveWheelCleaningFactory().clean();
				break;
		}
	}
}
```

---

Looking at examples, it's noticeable that the key idea is to create objects which represent various strategies. These objects form a pool of strategies from which the context object can choose from to vary its behavior as per its strategy. These objects (strategies) perform the same operation, have the same(single) job and compose the same interface strategy.

#### Structure

![strategy_pattern_structure](../static/books/strategy_pattern_structure.png)

In the figure above, the `Context` class depends on the `Strategy`. During execution or runtime, different strategies of `Strategy` type are passed to the `Context` class. The Strategy provides the template by which the strategies must abide by for implementation.

#### How to Implement

-   identify an algorithm that's prone to frequent changes. It may also be a massive conditional that selects and executes a variant of the same algorithm at runtime.
-   Declare the strategy interface common to all variants of the algorithm.
-   One by one, extract all algorithms into their own classes. They should all implement the strategy interface.
-   In the context class, add a field for storing a reference to a strategy object. Provide a setter for replacing values of that field. The context should work with the strategy object only via the strategy interface. The context may define an interface which lets the strategy access its data.
-   Clients of the context must associate it with a suitable strategy that matches the way they expect the context to perform its primary job.

#### Strategy pattern resources

-   [The Strategy Pattern - Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)

### The Observer Pattern

> _Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing._

When you're trying to picture the Observer Pattern, a newspaper subscription service with its publisher and subscribers is a good way to visualize the pattern.

> The Observer Pattern defines a **one-to-many** dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

![one-to-many](../static/books/design_patterns_one_to_many.png)

The subject and observers define the one-to-many relationship. The observers are dependent on the subject such that when the subject's state changes, the observers get notified. Depending on the style of notification, the observer may also be updated with new values.

There are a few different ways to implement the Observer Pattern, but most revolve around a class design that includes **Subject** and **Observer** interfaces.

![subject_observer_interface](../static/books/subject_observer_interface.png)

#### The power of Loose Coupling

> Strive for loosely coupled designs between objects that interact.

When two objects are loosely coupled, they can interact, but have very little knowledge of each other. The Observer Pattern provides an object design where subjects and observers are loosely coupled. Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

-   **The only thing the subject knows about an observer is that it implements a certain interface (the Observer interface).** It doesn't need to know the concrete class of the observer, what it does, or anything else about it.
-   _We can add new observers at any time._ Because the only thing the subject depends on is a list of objects that implement the Observer interface, we can add new observers whenever we want. In fact, we can replace any observer at runtime with another observer and the subject will keep purring along. Likewise, we can remove observers at any time.
-   _We never need to modify the subject to add new types of observers._ Let's say we have a new concrete class come along that needs to be an observer. We don't need to make any changes to the subject to accommodate the new class type; all we have to do is implement the Observer interface in the new class and register as an observer. The subject doesn't care; it will deliver notifications to any object that implements the Observer interface.
-   _We can reuse subjects or observers independently of each other._ If we have another use for a subject or an observer, we can easily reuse them because the two aren't tightly coupled.
-   _Changes to either the subject or an observer will not affect the other._ Because the two are loosely coupled, we are free to make changes to either, as long as the objects still meet their obligations to implement the subject or observer interfaces.

#### The Observer Pattern Structure

![observer_pattern_structure](../static/books/observer_pattern_structure.png)

1. The Publisher (Subject) issues events of interest to other objects (observers). These events occur when the publisher changes its state or executes some behaviors.
2. When a new event happens, the publisher goes over the sub- scription list and calls the notification method declared in the subscriber interface on each subscriber object.
3. The Subscriber interface declares the notification interface. In most cases, it consists of a single update method.
4. Concrete Subscribers perform some actions in response to notifications issued by the publisher.
5. Usually, subscribers need some contextual information to han- dle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting sub- scriber fetch any required data directly.
6. The Client creates publisher and subscriber objects separately and then registers subscribers for publisher updates.

#### When to use Observer Pattern

-   Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.
-   Use the pattern when some objects in your app must observe others, but only for a limited time or in specific cases.

#### The Observer Pattern Pseudocode

```ts
// The base publisher class includes subscription management // code and notification methods.
class EventManager is
	private field listeners: hash map of event types and listeners

method subscribe(eventType, listener) is
	listeners.add(eventType, listener)

method unsubscribe(eventType, listener) is
	listeners.remove(eventType, listener)

method notify(eventType, data) is
	foreach (listener in listeners.of(eventType)) do
		listener.update(data)

// The concrete publisher contains real business logic that's // interesting for some subscribers. We could derive this class // from the base publisher, but that isn't always possible in // real life because the concrete publisher might already be a // subclass. In this case, you can patch the subscription logic // in with composition, as we did here.
class Editor is
	private field events: EventManager
	private field file: File

	constructor Editor() is
		events = new EventManager()

	// Methods of business logic can notify subscribers about changes.
	method openFile(path) is
		this.file = new File(path) events.notify("open", file.name)

	method saveFile() is
		file.write() events.notify("save", file.name

	// ...

// Here's the subscriber interface. If your programming language // supports functional types, you can replace the whole
// subscriber hierarchy with a set of functions.
interface EventListener is
	method update(filename)

// Concrete subscribers react to updates issued by the publisher // they are attached to.
class LoggingListener implements EventListener is
	private field log: File
	private field message

	constructor LoggingListener(log_filename, message) is
		this.log = new File(log_filename)
		this.message = message

		method update(filename) is
			log.write(replace('%s',filename,message))

class EmailAlertsListener implements EventListener is
private field email: string
constructor EmailAlertsListener(email, message) is
	this.email = email
	this.message = message

	method update(filename) is
		system.email(email, replace('%s',filename,message))

// An application can configure publishers and subscribers at // runtime.
class Application is
	method config() is
		editor = new TextEditor()

		logger = new LoggingListener( "/path/to/log.txt", "Someone has opened the file: %s");
		editor.events.subscribe("open", logger)

		emailAlerts = new EmailAlertsListener( "admin@example.com", "Someone has changed the file: %s")
		editor.events.subscribe("save", emailAlerts)
```

---

## Resources

-   [Design Patterns: Elements of Reusable Object-Oriented Software by Gamma, Helm, Johnson, & Vlissides, Addison Wesley, 1995](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
-   [Pro TypeScript - Application-Scale JavaScript Development by Steve Fenton](https://www.amazon.com/Pro-TypeScript-Application-Scale-JavaScript-Development/dp/1484232488/ref=sr_1_1?s=books&ie=UTF8&qid=1543248511&sr=1-1&keywords=pro+typescript+steve+fenton)
-   [Dive Into Design Patterns by Alexander Shvets](https://refactoring.guru/design-patterns/book)
-   [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
