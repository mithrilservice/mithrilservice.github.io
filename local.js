var root = document.body

m.render(root, [
  m("main", [
    m("h1", {class: "title"}, "Mithril Service App"),
    m("button", "This button can be clicked"),
  ])
])

var count = 0
var increment = function() {
  m.request({
    method: "POST",
    url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
    body: {count: count + 1},
    withCredentials: true.
  })
  .then(function(data) {
    count = parseInt(data.count)
  })
}

var Hello = {
  view: function() {
    return m("main", [
      m("h1", "Count function"),
      m("button", {onclick: increment}, count + " clicks"),
    ])
  }
}

m.mount(root, Hello)

var Splash = {
  view: function() {
    return m("a", {href: "#!/hello"}, "Dive in!")
  }
}

m.route(root, "/splash", {
  "/splash": Splash,
  "/hello": Hello,
})
