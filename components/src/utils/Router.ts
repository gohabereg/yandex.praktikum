import Block from './Block';

class Route {
  private pathname: string;
  private blockClass: typeof Block;
  private block: Block | null;
  private props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    console.log(this.block);

    if (this.block) {
      this.block.getContent().remove();
    }
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass();
    }

    const root = document.querySelector(this.props.rootQuery);

    if (!root) {
      throw new Error('Root not found');
    }

    root.innerHTML = '';
    root.appendChild(this.block.getContent());
  }
}

class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history = window.history;
  private currentRoute: Route | null = null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, {rootQuery: '#app'});

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }


  private getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default Router;

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    constructor(props: any) {
      const router = new Router()

      super({...props, router: router});
    }
  }
}
