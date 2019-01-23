function ajax(url, cb) {
    // fake ajax response:
    cb({
      foo: 2,
      baz: [6, 8, 10],
      bam: {
        qux: 12
      }
    });
  }
  
  function check(data) {
    console.log(
      56 ===
        data.foo +
          data.bar +
          data.baz[0] +
          data.baz[1] +
          data.baz[2] +
          data.bam.qux +
          data.bam.qam
    );
  }
  
  var defaults = {
    foo: 0,
    bar: 4,
    bam: {
      qux: 0,
      qam: 14
    }
  };
  
  // YOUR CODE HERE
  function response(cbs) {
    let { foo: foos, baz: bazz, bam:{qux:quxx} } = cbs;
    let {
      bar: barr,
      bam: { qux: quxxx, qam: qamm }
    } = defaults;
    let data = {
      foo: foos,
      bar: barr,
      baz: bazz,
      bam: {
        qux: quxx + quxxx,
        qam: qamm
      }
    };

    check(data); // true
  }
  
  // DO NOT MODIFY
  ajax("http://fun.tld", response);