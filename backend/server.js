require('http')
  .Server((_,r)=>
      r.end('We are running in separate file now')).listen();