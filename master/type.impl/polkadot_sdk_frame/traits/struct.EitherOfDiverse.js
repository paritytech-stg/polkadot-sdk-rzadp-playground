(function() {var type_impls = {
"polkadot_sdk_frame":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EnsureOrigin%3COuterOrigin%3E-for-EitherOfDiverse%3CL,+R%3E\" class=\"impl\"><a href=\"#impl-EnsureOrigin%3COuterOrigin%3E-for-EitherOfDiverse%3CL,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OuterOrigin, L, R&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOrigin\">EnsureOrigin</a>&lt;OuterOrigin&gt; for <a class=\"struct\" href=\"polkadot_sdk_frame/traits/struct.EitherOfDiverse.html\" title=\"struct polkadot_sdk_frame::traits::EitherOfDiverse\">EitherOfDiverse</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOrigin\">EnsureOrigin</a>&lt;OuterOrigin&gt;,\n    R: <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOrigin\">EnsureOrigin</a>&lt;OuterOrigin&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Success\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Success\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#associatedtype.Success\" class=\"associatedtype\">Success</a> = <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;&lt;L as <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOrigin\">EnsureOrigin</a>&lt;OuterOrigin&gt;&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOrigin::Success\">Success</a>, &lt;R as <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOrigin\">EnsureOrigin</a>&lt;OuterOrigin&gt;&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOrigin::Success\">Success</a>&gt;</h4></section></summary><div class='docblock'>A return type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_origin\" class=\"method trait-impl\"><a href=\"#method.try_origin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#tymethod.try_origin\" class=\"fn\">try_origin</a>(\n    o: OuterOrigin\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"polkadot_sdk_frame/traits/struct.EitherOfDiverse.html\" title=\"struct polkadot_sdk_frame::traits::EitherOfDiverse\">EitherOfDiverse</a>&lt;L, R&gt; as <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOrigin\">EnsureOrigin</a>&lt;OuterOrigin&gt;&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOrigin::Success\">Success</a>, OuterOrigin&gt;</h4></section></summary><div class='docblock'>Perform the origin check.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_successful_origin\" class=\"method trait-impl\"><a href=\"#method.try_successful_origin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#tymethod.try_successful_origin\" class=\"fn\">try_successful_origin</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;OuterOrigin, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Attempt to get an outer origin capable of passing <code>try_origin</code> check. May return <code>Err</code> if it\nis impossible. <a href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#tymethod.try_successful_origin\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ensure_origin\" class=\"method trait-impl\"><a href=\"#method.ensure_origin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#method.ensure_origin\" class=\"fn\">ensure_origin</a>(o: OuterOrigin) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOrigin.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOrigin::Success\">Success</a>, <a class=\"struct\" href=\"polkadot_sdk_frame/traits/struct.BadOrigin.html\" title=\"struct polkadot_sdk_frame::traits::BadOrigin\">BadOrigin</a>&gt;</h4></section></summary><div class='docblock'>Perform the origin check.</div></details></div></details>","EnsureOrigin<OuterOrigin>","polkadot_sdk_frame::traits::EnsureOneOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EnsureOriginWithArg%3COuterOrigin,+Argument%3E-for-EitherOfDiverse%3CL,+R%3E\" class=\"impl\"><a href=\"#impl-EnsureOriginWithArg%3COuterOrigin,+Argument%3E-for-EitherOfDiverse%3CL,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OuterOrigin, L, R, Argument&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOriginWithArg\">EnsureOriginWithArg</a>&lt;OuterOrigin, Argument&gt; for <a class=\"struct\" href=\"polkadot_sdk_frame/traits/struct.EitherOfDiverse.html\" title=\"struct polkadot_sdk_frame::traits::EitherOfDiverse\">EitherOfDiverse</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOriginWithArg\">EnsureOriginWithArg</a>&lt;OuterOrigin, Argument&gt;,\n    R: <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOriginWithArg\">EnsureOriginWithArg</a>&lt;OuterOrigin, Argument&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Success\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Success\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#associatedtype.Success\" class=\"associatedtype\">Success</a> = <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;&lt;L as <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOriginWithArg\">EnsureOriginWithArg</a>&lt;OuterOrigin, Argument&gt;&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOriginWithArg::Success\">Success</a>, &lt;R as <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOriginWithArg\">EnsureOriginWithArg</a>&lt;OuterOrigin, Argument&gt;&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOriginWithArg::Success\">Success</a>&gt;</h4></section></summary><div class='docblock'>A return type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_origin\" class=\"method trait-impl\"><a href=\"#method.try_origin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#tymethod.try_origin\" class=\"fn\">try_origin</a>(\n    o: OuterOrigin,\n    a: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Argument</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"polkadot_sdk_frame/traits/struct.EitherOfDiverse.html\" title=\"struct polkadot_sdk_frame::traits::EitherOfDiverse\">EitherOfDiverse</a>&lt;L, R&gt; as <a class=\"trait\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html\" title=\"trait polkadot_sdk_frame::traits::EnsureOriginWithArg\">EnsureOriginWithArg</a>&lt;OuterOrigin, Argument&gt;&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOriginWithArg::Success\">Success</a>, OuterOrigin&gt;</h4></section></summary><div class='docblock'>Perform the origin check, returning the origin value if unsuccessful. This allows chaining.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_successful_origin\" class=\"method trait-impl\"><a href=\"#method.try_successful_origin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#tymethod.try_successful_origin\" class=\"fn\">try_successful_origin</a>(a: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Argument</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;OuterOrigin, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Attempt to get an outer origin capable of passing <code>try_origin</code> check. May return <code>Err</code> if it\nis impossible. <a href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#tymethod.try_successful_origin\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ensure_origin\" class=\"method trait-impl\"><a href=\"#method.ensure_origin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#method.ensure_origin\" class=\"fn\">ensure_origin</a>(\n    o: OuterOrigin,\n    a: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Argument</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/traits/trait.EnsureOriginWithArg.html#associatedtype.Success\" title=\"type polkadot_sdk_frame::traits::EnsureOriginWithArg::Success\">Success</a>, <a class=\"struct\" href=\"polkadot_sdk_frame/traits/struct.BadOrigin.html\" title=\"struct polkadot_sdk_frame::traits::BadOrigin\">BadOrigin</a>&gt;</h4></section></summary><div class='docblock'>Perform the origin check.</div></details></div></details>","EnsureOriginWithArg<OuterOrigin, Argument>","polkadot_sdk_frame::traits::EnsureOneOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()