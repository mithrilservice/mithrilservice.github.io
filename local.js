var root = document.body

m.render(root, [
  m("main", [
    m("h1", {class: "title"}, "Mithril Service App"),
    m("button", "This button can be clicked"),
  ])
])

var count = 0

var Hello = {
  view: function() {
    return m("main", [
      m("h1", "Count function"),
      m("button", {onclick: function() {count++}}, count + " clicks"),
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
