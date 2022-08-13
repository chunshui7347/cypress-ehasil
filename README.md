# Installation

Git clone and navigate to root directory and run:

```sh
$ npm i
```

# Terminal commands

To pop up cypress gui to run specs or specific spec, run:

```sh
$ npx cypress open
```

For whole test suite test, run:

```sh
$ npx cypress run
```

or

```sh
$ npm run test
```

When doing specific file test headless run (replace 001registerNFirstTimeLogin.spec.js with your filepath):

```sh
$ npx cypress run --spec cypress/integration/001registerNFirstTimeLogin.spec.js
```

> Add --headed before --spec to run with gui popup

> Use commas to separate multiple file paths planned to be run

or

```sh
$ npm run spec cypress/integration/001registerNFirstTimeLogin.spec.js
```

> Remove --headless at package.json scripts to run with gui popup

# Commonly used APIs

> More APIs at https://docs.cypress.io/api/api/table-of-contents.html

##### .get(selector):

Targets an element on screen. (e.g. 'div' || '.className' ||
'[name=elementName]' || 'input[class="className1 className2"]')

```sh
cy.get('.btn-outline-primary').click()
```

> Tips: We can use the selector playground in the cypress gui or the browser's Chropath to easily obtain selector

##### .contains(value)

Checks for text or other values for a more specific scope, chained after .get

```sh
cy.get('.btn-outline-primary').contains('Next').should('be.visible')
```

##### .find(selector)

Gets the descendent DOM elements of a specific selector.

```sh
cy.get('.form').find('.btn-outline-primary')
```

##### .scrollIntoView([,options])

Scrolls an element into view (e.g. {duration: 2000, easing: 'linear', offset:{top: 150}})

```sh
cy.get('.btn-outline-primary').contains('Next').scrollIntoView().should('be.visible')
```

##### .first()

Gets the first target element only.

```sh
cy.get('.btn-outline-primary').first().click()
```

##### .eq(index)

Gets the nth element of the selected group.

```sh
cy.get('button').eq(0).click()
```

##### .click(obj)

Chained after selector action (e.g. .get/.contains), applies click action
with optional obj containing properties like "force: true" to force click
elements hidden by current layer or "multiple: true" to multi-click all targeted
elements.

```sh
cy.get('.hidden-from-dom').click({force: true})
```

##### .select(option)

Chained after selector action (e.g. .get/.contains), selects from the options of a select tag element.

```sh
cy.get('select').select('I am an option.')
```

##### .clear()

Chained after selector action, clears input field.

```sh
cy.get('input[type="text"]').first().clear()
```

##### .type(text)

Types text into selected field.

```sh
cy.get('input[type="text"]').first().type('Hello World')
```

##### .wait(milliseconds / aliases)

Suspends execution for a period of time.

```sh
cy.wait(1500)
```

or

```sh
cy.wait('@alias')
```

##### .intercept(method, url, routeHandler?)

Acts as a catcher of http requests at the network layer, can be used to await network response.

```sh
cy.intercept('POST', 'login').as('login')
cy.wait('@login')
```

##### .request(method, url, body)

Makes an HTTP request.

```sh
cy.request('POST', 'http://posturl', {body: bodyContent}).then((res)=>{
    expect(response.status).to.eq(20);
    expect(response.body).to.have.property('name', 'John Doe')
    })
```

##### .url()

Returns value of current url.

```sh
cy.url().should('include', 'helloworld')
```

##### .should(assertion)

Asserts a certain condition (e.g. 'be.visible' || 'not.be.empty' || 'eq' ,
'foobar' || 'include', '/url')

```sh
cy.get('.button-visible').should('be.visible')
```

##### .go(direction, options)

Navigates back or forward to the respective URL in the browser's history.

```sh
cy.go('back', {log: true, timeout: 3000})
```

##### .attachFile(fixture[, processingOpts])

Uploads / drag-and-drop documents (e.g. 'icon.png', {subjectType: 'drag-n-drop'}
|| 'file.pdf')

```sh
cy.get('.react-dropzone').attachFile('image.jpg', {subjectType:
'drag-n-drop'})
```

> Ref: https://www.npmjs.com/package/cypress-file-upload
