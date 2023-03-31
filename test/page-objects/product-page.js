class ProductPage {
    open() {
      return browser.url("/inventory.html");
    }
  
    get productPageTitle(){
      return $(".title");
    }
  }
  
  export default new ProductPage();
  