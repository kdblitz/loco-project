class NavbarController {
  // @ngInject
  constructor($state) {
    let state = $state;
    setTimeout( () => {
      this.currentNavItem = state.current.name;
    }, 0);
  }
}

export default NavbarController;
