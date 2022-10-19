// Fifo en js

var Queue = {
    items: [],
    limit: 10,
  
    Add: function (e) {
      return this.items.length < this.limit
        ? (this.items.push(e), 'agregado')
        : 'cannot add element because it exceeds the allowed limit';
    },
    Offer: function (index, element) {
      return this.items.length < this.limit
        ? ((this.items[index] = element), 'agg')
        : 'cannot add element because it exceeds the allowed limit';
    },
    Elements: function (limit) {
      return this.items.length < limit
        ? 'request exceeds array size'
        : this.items.slice(0, limit);
    },
    Resum: function () {
      return this.items.length == 0
        ? 'there are no data'
        : `first item is: ${
            this.items[0]
          },\n last element is: ${this.items.pop()},\n total array size is: ${
            this.items.length
          }`;
    },
    Peek: function () {
      return this.items.length == 0 ? 'there are no data' : this.items[0];
    },
    Poll: function () {
      return this.items.length == 0 ? 'there are no data' : this.items.shift();
    },
    Remove: function () {
      return this.items.shift();
    },
    Size: function () {
      return this.items.length;
    },
    Is_empty: function () {
      return this.items.length == 0;
    },
  };
  
  var Q = Queue;
  console.log(Q);
  console.log(Q.Peek());
  console.log(Q.Add(1));
  console.log(Q.Add(2));
  console.log(Q.Add(4));
  console.log(Q.Add(5));
  console.log(Q.Offer(2, 3));
  console.log(Q.Elements());
  console.log(Q.Is_empty());
  console.log(Q.Size());
  console.log(Q.Peek());
  console.log(Q.Elements());
  console.log(Q.Poll());
  console.log(Q.Elements());
  console.log(Q.Remove());
  console.log(Q.Elements());
  console.log(Q.Resum());
  console.log(Q.Size());
  console.log(Q.Is_empty());