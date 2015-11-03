var sampleSteps = function() {

	this.Given(/^this is the first sample$/, function (callback) {
	   browser.get('https://angularjs.org');
	    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();
	var todoList = element.all(by.repeater('todo in todoList.todos'));
    
	  console.log(todoList.count());
	  callback();
	});

	this.Given(/^this is the second sample$/, function (callback) {
	  this.greetings("everybody", callback);
	});

};

module.exports = sampleSteps;