class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }
  
  html(string) {
    if (!string) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach( (el) => {
        el.innerHTML = string;
      });
    }
  }
  
  empty() {
    // this.html('');
    this.HTMLElements.forEach( (el) => {
      el.innerHTML = "";
    });
  }
  
  append(arg) {
    this.HTMLElements[0].innerHTML += arg;
  }
  
  attr(attrName, attrValue) {
    if (attrValue) {
      this.HTMLElements[0].setAttribute(attrName, attrValue);
    } else {
      return this.HTMLElements[0].getAttribute(attrName);
    }
  }
  
  addClass(className) {
    // this.HTMLElements[0].attributes.class.value += ` ${className}`;
    this.HTMLElements[0].classList.add(className);
  }
  
  removeClass(className) {
    this.HTMLElements[0].classList = Array.from(this.HTMLElements[0].classList)
      .filter( (el) => el !== className);
  }
  
  children() {
    return new DOMNodeCollection(this.HTMLElements[0].children);
  }
  
  on(eventName, callback) {
    this.HTMLElements[0].addEventListener(eventName, callback);
  }
  
  off(eventName, callback) {
    this.HTMLElements[0].removeEventListener(eventName, callback);
  }
}

module.exports = DOMNodeCollection;