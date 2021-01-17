// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ")

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
]
// class Node {
//   constructor(value) {
//     this.value = value
//     this.parent = null
//   }
//   static setParent(parent) {
//     return (this.parent = parent)
//   }
// }
const adjacencyList = new Map()

function addNode(airport) {
  adjacencyList.set(airport, [])
}

function addEdge(from, to) {
  adjacencyList.get(from).push(to)
  adjacencyList.get(to).push(from)
}

airports.forEach((airport) => addNode(airport))
routes.forEach((route) => addEdge(route[0], route[1]))
console.log(adjacencyList)

function bfs(start, end) {
  const queue = [start]
  const visited = new Set()

  while (queue.length > 0) {
    const searchItem = queue.shift()
    const possibleRoutes = adjacencyList.get(searchItem)
    possibleRoutes.forEach((route) => {
      if (!visited.has(route)) {
        queue.push(route)
        visited.add(route)
      }

      if (route === end) {
        console.log(`${route} found`)
      }
    })
  }
}
bfs("PHX", "BKK")
let count = 0
const dfs = (start, end, visited = new Set()) => {
  visited.add(start)
  const possibleRoutes = adjacencyList.get(start)
  possibleRoutes.forEach((route) => {
    if (route === end) {
      console.log(`${end} found in ${count}`)
      return count
    }
    if (!visited.has(route)) {
      count++
      dfs(route, end, visited)
    }
  })
}
// dfs("PHX", "BKK")
