// export default class extends Relay.Route {
//   static queries = {
//     viewer: () => Relay.QL`
//       query {
//         viewer
//       }
//     `,
//   };
//   static routeName = 'AppHomeRoute';
// }


// Tutorial - Game
// ================================ start
export default class extends Relay.Route {
  static path = '/';
  static queries = {
    game: () => Relay.QL`query { game }`,
  };
  static routeName = 'AppHomeRoute';
}
