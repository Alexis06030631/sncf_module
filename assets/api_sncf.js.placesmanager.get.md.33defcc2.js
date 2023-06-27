import{_ as a,o as s,c as e,V as t}from"./chunks/framework.51fee0ea.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/sncf.js.placesmanager.get.md","filePath":"api/sncf.js.placesmanager.get.md","lastUpdated":1687851429000}'),n={name:"api/sncf.js.placesmanager.get.md"},o=t(`<p><a href="./">Home</a> &gt; <a href="./sncf.js.html">sncf.js</a> &gt; <a href="./sncf.js.placesmanager.html">PlacesManager</a> &gt; <a href="./sncf.js.placesmanager.get.html">get</a></p><h2 id="placesmanager-get-method" tabindex="-1">PlacesManager.get() method <a class="header-anchor" href="#placesmanager-get-method" aria-label="Permalink to &quot;PlacesManager.get() method&quot;">​</a></h2><p>Get a place by id</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(stationID: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">StopArea </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> AdministrativeRegion</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>stationID</td><td>string</td><td>The id of the station to get</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Promise&lt;<a href="./sncf.js.stoparea.html">StopArea</a> | <a href="./sncf.js.administrativeregion.html">AdministrativeRegion</a>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>This example shows how to get a place by id</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> place </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">places</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stop_area:SNCF:87686006</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(place)</span></span></code></pre></div>`,12),l=[o];function p(r,c,i,h,d,g){return s(),e("div",null,l)}const D=a(n,[["render",p]]);export{y as __pageData,D as default};
