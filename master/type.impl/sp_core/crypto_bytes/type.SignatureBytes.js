(function() {var type_impls = {
"sp_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#350-363\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, SubTag&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"type\" href=\"sp_core/crypto_bytes/type.SignatureBytes.html\" title=\"type sp_core::crypto_bytes::SignatureBytes\">SignatureBytes</a>&lt;N, SubTag&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"sp_core/crypto/trait.CryptoType.html\" title=\"trait sp_core::crypto::CryptoType\">CryptoType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#354-362\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(deserializer: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sp_core::bandersnatch::Signature","sp_core::bls::Signature","sp_core::ecdsa::Signature","sp_core::ed25519::Signature","sp_core::paired_crypto::Signature","sp_core::sr25519::Signature"],["<section id=\"impl-Signature-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#334\">source</a><a href=\"#impl-Signature-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, SubTag&gt; <a class=\"trait\" href=\"sp_core/crypto/trait.Signature.html\" title=\"trait sp_core::crypto::Signature\">Signature</a> for <a class=\"type\" href=\"sp_core/crypto_bytes/type.SignatureBytes.html\" title=\"type sp_core::crypto_bytes::SignatureBytes\">SignatureBytes</a>&lt;N, SubTag&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"sp_core/crypto/trait.CryptoType.html\" title=\"trait sp_core::crypto::CryptoType\">CryptoType</a>,</span></h3></section>","Signature","sp_core::bandersnatch::Signature","sp_core::bls::Signature","sp_core::ecdsa::Signature","sp_core::ed25519::Signature","sp_core::paired_crypto::Signature","sp_core::sr25519::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#365-378\">source</a><a href=\"#impl-Debug-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, SubTag&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"type\" href=\"sp_core/crypto_bytes/type.SignatureBytes.html\" title=\"type sp_core::crypto_bytes::SignatureBytes\">SignatureBytes</a>&lt;N, SubTag&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"sp_core/crypto/trait.CryptoType.html\" title=\"trait sp_core::crypto::CryptoType\">CryptoType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#370-372\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sp_core::bandersnatch::Signature","sp_core::bls::Signature","sp_core::ecdsa::Signature","sp_core::ed25519::Signature","sp_core::paired_crypto::Signature","sp_core::sr25519::Signature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#337-347\">source</a><a href=\"#impl-Serialize-for-CryptoBytes%3CN,+(SignatureTag,+SubTag)%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, SubTag&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"type\" href=\"sp_core/crypto_bytes/type.SignatureBytes.html\" title=\"type sp_core::crypto_bytes::SignatureBytes\">SignatureBytes</a>&lt;N, SubTag&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"sp_core/crypto/trait.CryptoType.html\" title=\"trait sp_core::crypto::CryptoType\">CryptoType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto_bytes.rs.html#341-346\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(&amp;self, serializer: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sp_core::bandersnatch::Signature","sp_core::bls::Signature","sp_core::ecdsa::Signature","sp_core::ed25519::Signature","sp_core::paired_crypto::Signature","sp_core::sr25519::Signature"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()