do
    define {x: 5}
    define {fn: lambda y body: (table {x: x, y: y})}
    define {x: 10}
    display (fn 10)
    display x
