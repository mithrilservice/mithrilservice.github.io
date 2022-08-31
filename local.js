var root = document.body

m.render(root, [
  m("main", [
    m("h1", {class: "title"}, "Mithril Service App"),
    m("button", "This button can be clicked"),
  ])
])
