(function() {var type_impls = {
"sp_crypto_ec_utils":[["<section id=\"impl-Copy-for-Config%3CH%3E\" class=\"impl\"><a href=\"#impl-Copy-for-Config%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for Config&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + CurveHooks,</span></h3></section>","Copy","sp_crypto_ec_utils::bls12_377::g2::Config"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SWCurveConfig-for-Config%3CH%3E\" class=\"impl\"><a href=\"#impl-SWCurveConfig-for-Config%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; SWCurveConfig for Config&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: CurveHooks,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.msm\" class=\"method trait-impl\"><a href=\"#method.msm\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">msm</a>(\n    bases: &amp;[Affine&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt;],\n    scalars: &amp;[&lt;Config&lt;H&gt; as CurveConfig&gt;::ScalarField]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Projective&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Multi scalar multiplication jumping into the user-defined <code>msm_g2</code> hook.</p>\n<p>On any internal error returns <code>Err(0)</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mul_projective\" class=\"method trait-impl\"><a href=\"#method.mul_projective\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">mul_projective</a>(\n    base: &amp;Projective&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt;,\n    scalar: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>]\n) -&gt; Projective&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt;</h4></section></summary><div class=\"docblock\"><p>Projective multiplication jumping into the user-defined <code>mul_projective_g2</code> hook.</p>\n<p>On any internal error returns <code>Projective::zero()</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mul_affine\" class=\"method trait-impl\"><a href=\"#method.mul_affine\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">mul_affine</a>(\n    base: &amp;Affine&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt;,\n    scalar: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>]\n) -&gt; Projective&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt;</h4></section></summary><div class=\"docblock\"><p>Affine multiplication jumping into the user-defined <code>mul_projective_g2</code> hook.</p>\n<p>On any internal error returns <code>Projective::zero()</code>.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.COEFF_A\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.COEFF_A\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">COEFF_A</a>: &lt;Config&lt;H&gt; as CurveConfig&gt;::BaseField = &lt;ArkConfig as SWCurveConfig&gt;::COEFF_A</h4></section></summary><div class='docblock'>Coefficient <code>a</code> of the curve equation.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.COEFF_B\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.COEFF_B\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">COEFF_B</a>: &lt;Config&lt;H&gt; as CurveConfig&gt;::BaseField = &lt;ArkConfig as SWCurveConfig&gt;::COEFF_B</h4></section></summary><div class='docblock'>Coefficient <code>b</code> of the curve equation.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.GENERATOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.GENERATOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">GENERATOR</a>: Affine&lt;&lt;Config&lt;H&gt; as Bls12Config&gt;::G2Config&gt; = _</h4></section></summary><div class='docblock'>Generator of the prime-order subgroup.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mul_by_a\" class=\"method trait-impl\"><a href=\"#method.mul_by_a\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">mul_by_a</a>(\n    elem: &lt;Config&lt;H&gt; as CurveConfig&gt;::BaseField\n) -&gt; &lt;Config&lt;H&gt; as CurveConfig&gt;::BaseField</h4></section></summary><div class='docblock'>Helper method for computing <code>elem * Self::COEFF_A</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_b\" class=\"method trait-impl\"><a href=\"#method.add_b\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">add_b</a>(elem: Self::BaseField) -&gt; Self::BaseField</h4></section></summary><div class='docblock'>Helper method for computing <code>elem + Self::COEFF_B</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_in_correct_subgroup_assuming_on_curve\" class=\"method trait-impl\"><a href=\"#method.is_in_correct_subgroup_assuming_on_curve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_in_correct_subgroup_assuming_on_curve</a>(item: &amp;Affine&lt;Self&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Check if the provided curve point is in the prime-order subgroup. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear_cofactor\" class=\"method trait-impl\"><a href=\"#method.clear_cofactor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clear_cofactor</a>(item: &amp;Affine&lt;Self&gt;) -&gt; Affine&lt;Self&gt;</h4></section></summary><div class='docblock'>Performs cofactor clearing.\nThe default method is simply to multiply by the cofactor.\nSome curves can implement a more efficient algorithm.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_with_mode\" class=\"method trait-impl\"><a href=\"#method.serialize_with_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_with_mode</a>&lt;W&gt;(\n    item: &amp;Affine&lt;Self&gt;,\n    writer: W,\n    compress: Compress\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, SerializationError&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span></h4></section></summary><div class='docblock'>If uncompressed, serializes both x and y coordinates as well as a bit for whether it is\ninfinity. If compressed, serializes x coordinate with two bits to encode whether y is\npositive, negative, or infinity.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize_with_mode\" class=\"method trait-impl\"><a href=\"#method.deserialize_with_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_with_mode</a>&lt;R&gt;(\n    reader: R,\n    compress: Compress,\n    validate: Validate\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Affine&lt;Self&gt;, SerializationError&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</span></h4></section></summary><div class='docblock'>If <code>validate</code> is <code>Yes</code>, calls <code>check()</code> to make sure the element is valid.</div></details><section id=\"method.serialized_size\" class=\"method trait-impl\"><a href=\"#method.serialized_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialized_size</a>(compress: Compress) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></div></details>","SWCurveConfig","sp_crypto_ec_utils::bls12_377::g2::Config"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CurveConfig-for-Config%3CH%3E\" class=\"impl\"><a href=\"#impl-CurveConfig-for-Config%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; CurveConfig for Config&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: CurveHooks,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.BaseField\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.BaseField\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">BaseField</a> = &lt;Config as CurveConfig&gt;::BaseField</h4></section></summary><div class='docblock'>Base field that the curve is defined over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.ScalarField\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ScalarField\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">ScalarField</a> = &lt;Config as CurveConfig&gt;::ScalarField</h4></section></summary><div class='docblock'>Finite prime field corresponding to an appropriate prime-order subgroup\nof the curve group.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.COFACTOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.COFACTOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">COFACTOR</a>: &amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>] = &lt;ArkConfig as CurveConfig&gt;::COFACTOR</h4></section></summary><div class='docblock'>The cofactor of this curve, represented as a sequence of little-endian limbs.</div></details><section id=\"associatedconstant.COFACTOR_INV\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.COFACTOR_INV\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">COFACTOR_INV</a>: &lt;Config&lt;H&gt; as CurveConfig&gt;::ScalarField = &lt;ArkConfig as CurveConfig&gt;::COFACTOR_INV</h4></section><section id=\"method.cofactor_is_one\" class=\"method trait-impl\"><a href=\"#method.cofactor_is_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cofactor_is_one</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","CurveConfig","sp_crypto_ec_utils::bls12_377::g2::Config"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Config%3CH%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Config%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Config&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + CurveHooks,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Config&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_crypto_ec_utils::bls12_377::g2::Config"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()