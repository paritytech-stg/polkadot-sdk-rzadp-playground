(function() {var type_impls = {
"staging_xcm_builder":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1056\">source</a><a href=\"#impl-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.into\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1057\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm_builder/test_utils/enum.Instruction.html#tymethod.into\" class=\"fn\">into</a>&lt;C&gt;(self) -&gt; <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;C&gt;</h4></section><section id=\"method.from\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1060\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm_builder/test_utils/enum.Instruction.html#tymethod.from\" class=\"fn\">from</a>&lt;C&gt;(xcm: <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;C&gt;) -&gt; <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h4></section></div></details>",0,"staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#382\">source</a><a href=\"#impl-Clone-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#382\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetWeight%3CW%3E-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1127\">source</a><a href=\"#impl-GetWeight%3CW%3E-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call, W&gt; <a class=\"trait\" href=\"staging_xcm/v2/traits/trait.GetWeight.html\" title=\"trait staging_xcm::v2::traits::GetWeight\">GetWeight</a>&lt;W&gt; for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.XcmWeightInfo.html\" title=\"trait staging_xcm_builder::test_utils::XcmWeightInfo\">XcmWeightInfo</a>&lt;Call&gt;,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.weight\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1128\">source</a><a href=\"#method.weight\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v2/traits/trait.GetWeight.html#tymethod.weight\" class=\"fn\">weight</a>(&amp;self) -&gt; <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Weight.html\" title=\"struct staging_xcm_builder::test_utils::Weight\">Weight</a></h4></section></div></details>","GetWeight<W>","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#382\">source</a><a href=\"#impl-PartialEq-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#382\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CInstruction%3CCall%3E%3E-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1214\">source</a><a href=\"#impl-TryFrom%3CInstruction%3CCall%3E%3E-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"staging_xcm/v3/enum.Instruction.html\" title=\"enum staging_xcm::v3::Instruction\">Instruction</a>&lt;Call&gt;&gt; for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#1216\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(\n    old_instruction: <a class=\"enum\" href=\"staging_xcm/v3/enum.Instruction.html\" title=\"enum staging_xcm::v3::Instruction\">Instruction</a>&lt;Call&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;, &lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"staging_xcm/v3/enum.Instruction.html\" title=\"enum staging_xcm::v3::Instruction\">Instruction</a>&lt;Call&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<Instruction<Call>>","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#373\">source</a><a href=\"#impl-Debug-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#373\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","staging_xcm_builder::test_utils::opaque::Instruction"],["<section id=\"impl-Eq-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#382\">source</a><a href=\"#impl-Eq-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section>","Eq","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#385\">source</a><a href=\"#impl-TypeInfo-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; TypeInfo for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;<span class=\"where fmt-newline\">where\n    Call: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#385\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#383\">source</a><a href=\"#impl-Encode-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; Encode for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#383\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#383\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)<span class=\"where fmt-newline\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","staging_xcm_builder::test_utils::opaque::Instruction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#384\">source</a><a href=\"#impl-Decode-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; Decode for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#384\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;, Error&gt;<span class=\"where fmt-newline\">where\n    __CodecInputEdqy: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","staging_xcm_builder::test_utils::opaque::Instruction"],["<section id=\"impl-EncodeLike-for-Instruction%3CCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v4/mod.rs.html#383\">source</a><a href=\"#impl-EncodeLike-for-Instruction%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; EncodeLike for <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.Instruction.html\" title=\"enum staging_xcm_builder::test_utils::Instruction\">Instruction</a>&lt;Call&gt;</h3></section>","EncodeLike","staging_xcm_builder::test_utils::opaque::Instruction"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()