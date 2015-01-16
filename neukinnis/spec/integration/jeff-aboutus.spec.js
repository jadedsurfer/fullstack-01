//jeff-aboutus.spec.js

/* global casper */

casper.test.begin('About Us - Navigation Test', 21, function suite(test){
  casper.start('http://localhost/neukinnis/client/aboutus.html', function(){
    test.assertTitle('About Us', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="index.html"]', 'Checks existence of link to Home page');
  });
  casper.then(function(){
    this.click('a[href="index.html"]', 'Navigates and clicks on link to Home page');
  });
  casper.then(function(){
    test.assertTitle('Neukinnis', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="aboutus.html"]', 'Check existence of link to About Us page');
  });
  casper.then(function(){
    this.click('a[href="aboutus.html"]', "Navigates and clicks on link to About Us page");
  });
  casper.then(function(){
    test.assertTitle('About Us', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="privacy.html"]', 'Check existence of link to Privacy page');
  });
  casper.then(function(){
    this.click('a[href="privacy.html"]', "Navigates and clicks on link to Privacy page");
  });
  casper.then(function(){
    test.assertTitle('Privacy', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="aboutus.html"]', 'Check existence of link to About Us page');
  });
  casper.then(function(){
    this.click('a[href="aboutus.html"]', "Navigates and clicks on link to About Us page");
  });
  casper.then(function(){
    test.assertTitle('About Us', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="courses.html"]', 'Check existence of link to Courses page');
  });
  casper.then(function(){
    this.click('a[href="courses.html"]', 'Navigates and clicks on link to Courses page');
  });
  casper.then(function(){
    test.assertTitle('Courses', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="aboutus.html"]', 'Check existence of link to About Us page');
  });
  casper.then(function(){
    this.click('a[href="aboutus.html"]', "Navigates and clicks on link to About Us page");
  });
  casper.then(function(){
    test.assertTitle('About Us', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="contactus.html"]', 'Check existence of link to Contact page');
  });
  casper.then(function(){
    this.click('a[href="contactus.html"]', "Navigates and clicks on link to Contact us page");
  });
  casper.then(function(){
    test.assertTitle('Contact Us', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="aboutus.html"]', 'Check existence of link to About Us page');
  });
  casper.then(function(){
    this.click('a[href="aboutus.html"]', "Navigates and clicks on link to About Us page");
  });
  casper.then(function(){
    test.assertTitle('About Us', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="instructors.html"]', 'Check existence of link to Instructors page');
  });
  casper.then(function(){
    this.click('a[href="instructors.html"]', "Navigates and clicks on link to Instructors page");
  });
  casper.then(function(){
    test.assertTitle('Instructors', 'Finds page title ' + this.getTitle());
    test.assertExists('a[href="aboutus.html"]', 'Check existence of link to About Us page');
  });
  casper.then(function(){
    this.click('a[href="aboutus.html"]', "Navigates and clicks on link to About Us page");
  });
  casper.then(function(){
    test.assertTitle('About Us', 'Finds page title ' + this.getTitle());
  });
  casper.run(function(){
    test.done();
  });
});
