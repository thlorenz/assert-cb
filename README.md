# assert-cb [![build status](https://secure.travis-ci.org/thlorenz/assert-cb.png)](http://travis-ci.org/thlorenz/assert-cb)

Assert that calls a function with an error instead of throwing it if the assert fails.

 ```js
var assert = require('assert-cb')
 
function doStuff(opts, cb) {
  if (!assert(opts.day, 'need to provide day', cb)) return;
  if (!assert(opts.hour, 'need to provide hour', cb)) return;
  
  // determine result
  [..]
  cb(null, res);
}
 ```
 

## Installation

    npm install assert-cb

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="assert-cb"><span class="type-signature"></span>assert-cb<span class="signature">(condition, msg, cb)</span><span class="type-signature"> &rarr; {boolean}</span></h4>
</dt>
<dd>
<div class="description">
<p>Assert that calls the callback if the given condition is false.
Passes the given condition through to the caller to allow branching depending on its value.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>condition</code></td>
<td class="type">
<span class="param-type">boolean</span>
</td>
<td class="description last"><p>if false callback is invoked with an error</p></td>
</tr>
<tr>
<td class="name"><code>msg</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>the error message</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>invoked only if the condition is false</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/assert-cb/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/assert-cb/blob/master/index.js#L7">lineno 7</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the given condition</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">boolean</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT


