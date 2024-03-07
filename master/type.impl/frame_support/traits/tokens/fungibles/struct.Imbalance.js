(function() {var type_impls = {
"frame_support":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#82-175\">source</a><a href=\"#impl-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.AssetId.html\" title=\"trait frame_support::traits::tokens::AssetId\">AssetId</a>, B: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.Balance.html\" title=\"trait frame_support::traits::tokens::Balance\">Balance</a>, OnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;, OppositeOnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;&gt; <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OnDrop, OppositeOnDrop&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.zero\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#89-91\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.zero\" class=\"fn\">zero</a>(asset: A) -&gt; Self</h4></section><section id=\"method.drop_zero\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#102-109\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.drop_zero\" class=\"fn\">drop_zero</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Self&gt;</h4></section><section id=\"method.split\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#111-117\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.split\" class=\"fn\">split</a>(self, amount: B) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#121-125\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.extract\" class=\"fn\">extract</a>(&amp;mut self, amount: B) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Mutate <code>self</code> by extracting a new instance with at most <code>amount</code> value, reducing <code>self</code>\naccordingly.</p>\n</div></details><section id=\"method.merge\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#127-135\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.merge\" class=\"fn\">merge</a>(self, other: Self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a>&gt;</h4></section><section id=\"method.subsume\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#136-144\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.subsume\" class=\"fn\">subsume</a>(&amp;mut self, other: Self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Self&gt;</h4></section><section id=\"method.offset\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#145-167\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.offset\" class=\"fn\">offset</a>(\n    self,\n    other: <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OppositeOnDrop, OnDrop&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"frame_support/traits/enum.SameOrOther.html\" title=\"enum frame_support::traits::SameOrOther\">SameOrOther</a>&lt;Self, <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OppositeOnDrop, OnDrop&gt;&gt;, (Self, <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OppositeOnDrop, OnDrop&gt;)&gt;</h4></section><section id=\"method.peek\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#168-170\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.peek\" class=\"fn\">peek</a>(&amp;self) -&gt; B</h4></section><section id=\"method.asset\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#172-174\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html#tymethod.asset\" class=\"fn\">asset</a>(&amp;self) -&gt; A</h4></section></div></details>",0,"frame_support::traits::tokens::fungibles::imbalance::Debt","frame_support::traits::tokens::fungibles::imbalance::Credit"],["<section id=\"impl-Eq-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#44\">source</a><a href=\"#impl-Eq-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.AssetId.html\" title=\"trait frame_support::traits::tokens::AssetId\">AssetId</a>, B: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.Balance.html\" title=\"trait frame_support::traits::tokens::Balance\">Balance</a>, OnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;, OppositeOnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OnDrop, OppositeOnDrop&gt;</h3></section>","Eq","frame_support::traits::tokens::fungibles::imbalance::Debt","frame_support::traits::tokens::fungibles::imbalance::Credit"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#55-67\">source</a><a href=\"#impl-Drop-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.AssetId.html\" title=\"trait frame_support::traits::tokens::AssetId\">AssetId</a>, B: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.Balance.html\" title=\"trait frame_support::traits::tokens::Balance\">Balance</a>, OnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;, OppositeOnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OnDrop, OppositeOnDrop&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#62-66\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","frame_support::traits::tokens::fungibles::imbalance::Debt","frame_support::traits::tokens::fungibles::imbalance::Credit"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#43\">source</a><a href=\"#impl-Debug-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.AssetId.html\" title=\"trait frame_support::traits::tokens::AssetId\">AssetId</a>, B: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.Balance.html\" title=\"trait frame_support::traits::tokens::Balance\">Balance</a>, OnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;, OppositeOnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OnDrop, OppositeOnDrop&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#43\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","frame_support::traits::tokens::fungibles::imbalance::Debt","frame_support::traits::tokens::fungibles::imbalance::Credit"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryDrop-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#69-80\">source</a><a href=\"#impl-TryDrop-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.AssetId.html\" title=\"trait frame_support::traits::tokens::AssetId\">AssetId</a>, B: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.Balance.html\" title=\"trait frame_support::traits::tokens::Balance\">Balance</a>, OnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;, OppositeOnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/trait.TryDrop.html\" title=\"trait frame_support::traits::TryDrop\">TryDrop</a> for <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OnDrop, OppositeOnDrop&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#77-79\">source</a><a href=\"#method.try_drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/trait.TryDrop.html#tymethod.try_drop\" class=\"fn\">try_drop</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Self&gt;</h4></section></summary><div class=\"docblock\"><p>Drop an instance cleanly. Only works if its value represents “no-operation”.</p>\n</div></details></div></details>","TryDrop","frame_support::traits::tokens::fungibles::imbalance::Debt","frame_support::traits::tokens::fungibles::imbalance::Credit"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#43\">source</a><a href=\"#impl-PartialEq-for-Imbalance%3CA,+B,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.AssetId.html\" title=\"trait frame_support::traits::tokens::AssetId\">AssetId</a>, B: <a class=\"trait\" href=\"frame_support/traits/tokens/trait.Balance.html\" title=\"trait frame_support::traits::tokens::Balance\">Balance</a>, OnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;, OppositeOnDrop: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/trait.HandleImbalanceDrop.html\" title=\"trait frame_support::traits::tokens::fungibles::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;A, B&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::Imbalance\">Imbalance</a>&lt;A, B, OnDrop, OppositeOnDrop&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/traits/tokens/fungibles/imbalance.rs.html#43\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","frame_support::traits::tokens::fungibles::imbalance::Debt","frame_support::traits::tokens::fungibles::imbalance::Credit"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()