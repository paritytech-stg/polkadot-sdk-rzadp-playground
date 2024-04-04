(function() {var type_impls = {
"node_testing":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Backend%3CBlock%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1135\">source</a><a href=\"#impl-Backend%3CBlock%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block&gt; <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1139\">source</a><h4 class=\"code-header\">pub fn <a href=\"node_testing/client/sc_client_db/struct.Backend.html#tymethod.new\" class=\"fn\">new</a>(\n    db_config: <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.DatabaseSettings.html\" title=\"struct node_testing::client::sc_client_db::DatabaseSettings\">DatabaseSettings</a>,\n    canonicalization_delay: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance of database backend.</p>\n<p>The pruning window is how old a block must be before the state is pruned.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset_trie_cache\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1159\">source</a><h4 class=\"code-header\">pub fn <a href=\"node_testing/client/sc_client_db/struct.Backend.html#tymethod.reset_trie_cache\" class=\"fn\">reset_trie_cache</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Reset the shared trie cache.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_test\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1167\">source</a><h4 class=\"code-header\">pub fn <a href=\"node_testing/client/sc_client_db/struct.Backend.html#tymethod.new_test\" class=\"fn\">new_test</a>(\n    blocks_pruning: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    canonicalization_delay: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;</h4></section></summary><div class=\"docblock\"><p>Create new memory-backed client backend for tests.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_test_with_tx_storage\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1173-1176\">source</a><h4 class=\"code-header\">pub fn <a href=\"node_testing/client/sc_client_db/struct.Backend.html#tymethod.new_test_with_tx_storage\" class=\"fn\">new_test_with_tx_storage</a>(\n    blocks_pruning: <a class=\"enum\" href=\"node_testing/client/enum.BlocksPruning.html\" title=\"enum node_testing::client::BlocksPruning\">BlocksPruning</a>,\n    canonicalization_delay: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;</h4></section></summary><div class=\"docblock\"><p>Create new memory-backed client backend for tests.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.expose_db\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1199\">source</a><h4 class=\"code-header\">pub fn <a href=\"node_testing/client/sc_client_db/struct.Backend.html#tymethod.expose_db\" class=\"fn\">expose_db</a>(&amp;self) -&gt; (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"node_testing/client/sc_client_db/trait.Database.html\" title=\"trait node_testing::client::sc_client_db::Database\">Database</a>&lt;H256&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>)</h4></section></summary><div class=\"docblock\"><p>Expose the Database that is used by this backend.\nThe second argument is the Column that stores the State.</p>\n<p>Should only be needed for benchmarking.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.expose_storage\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#1207\">source</a><h4 class=\"code-header\">pub fn <a href=\"node_testing/client/sc_client_db/struct.Backend.html#tymethod.expose_storage\" class=\"fn\">expose_storage</a>(\n    &amp;self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"sp_state_machine/trie_backend_essence/trait.Storage.html\" title=\"trait sp_state_machine::trie_backend_essence::Storage\">Storage</a>&lt;&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Hashing\" title=\"type sp_runtime::traits::Header::Hashing\">Hashing</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Expose the Storage that is used by this backend.</p>\n<p>Should only be needed for benchmarking.</p>\n</div></details></div></details>",0,"node_testing::client::Backend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Backend%3CBlock%3E-for-Backend%3CBlock%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2065\">source</a><a href=\"#impl-Backend%3CBlock%3E-for-Backend%3CBlock%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block&gt; <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt; for <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.BlockImportOperation\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.BlockImportOperation\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/backend/trait.Backend.html#associatedtype.BlockImportOperation\" class=\"associatedtype\">BlockImportOperation</a> = <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.BlockImportOperation.html\" title=\"struct node_testing::client::sc_client_db::BlockImportOperation\">BlockImportOperation</a>&lt;Block&gt;</h4></section></summary><div class='docblock'>Associated block insertion operation type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Blockchain\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Blockchain\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/backend/trait.Backend.html#associatedtype.Blockchain\" class=\"associatedtype\">Blockchain</a> = <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.BlockchainDb.html\" title=\"struct node_testing::client::sc_client_db::BlockchainDb\">BlockchainDb</a>&lt;Block&gt;</h4></section></summary><div class='docblock'>Associated blockchain backend type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.State\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.State\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/backend/trait.Backend.html#associatedtype.State\" class=\"associatedtype\">State</a> = RecordStatsState&lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.RefTrackingState.html\" title=\"struct node_testing::client::sc_client_db::RefTrackingState\">RefTrackingState</a>&lt;Block&gt;, Block&gt;</h4></section></summary><div class='docblock'>Associated state backend type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.OffchainStorage\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.OffchainStorage\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/backend/trait.Backend.html#associatedtype.OffchainStorage\" class=\"associatedtype\">OffchainStorage</a> = <a class=\"struct\" href=\"node_testing/client/sc_client_db/offchain/struct.LocalStorage.html\" title=\"struct node_testing::client::sc_client_db::offchain::LocalStorage\">LocalStorage</a></h4></section></summary><div class='docblock'>Offchain workers local storage.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.begin_operation\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2071\">source</a><a href=\"#method.begin_operation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.begin_operation\" class=\"fn\">begin_operation</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt; as <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sc_client_api/backend/trait.Backend.html#associatedtype.BlockImportOperation\" title=\"type sc_client_api::backend::Backend::BlockImportOperation\">BlockImportOperation</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Begin a new block insertion transaction with given parent block id. <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.begin_operation\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.begin_state_operation\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2087-2091\">source</a><a href=\"#method.begin_state_operation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.begin_state_operation\" class=\"fn\">begin_state_operation</a>(\n    &amp;self,\n    operation: &amp;mut &lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt; as <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sc_client_api/backend/trait.Backend.html#associatedtype.BlockImportOperation\" title=\"type sc_client_api::backend::Backend::BlockImportOperation\">BlockImportOperation</a>,\n    block: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Note an operation to contain state transition.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_operation\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2102\">source</a><a href=\"#method.commit_operation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.commit_operation\" class=\"fn\">commit_operation</a>(\n    &amp;self,\n    operation: &lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt; as <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sc_client_api/backend/trait.Backend.html#associatedtype.BlockImportOperation\" title=\"type sc_client_api::backend::Backend::BlockImportOperation\">BlockImportOperation</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Commit block insertion.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finalize_block\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2120-2124\">source</a><a href=\"#method.finalize_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.finalize_block\" class=\"fn\">finalize_block</a>(\n    &amp;self,\n    hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    justification: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;([<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">4</a>], <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Finalize block with given <code>hash</code>. <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.finalize_block\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_justification\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2143-2147\">source</a><a href=\"#method.append_justification\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.append_justification\" class=\"fn\">append_justification</a>(\n    &amp;self,\n    hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    justification: ([<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">4</a>], <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Append justification to the block with the given <code>hash</code>. <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.append_justification\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offchain_storage\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2185\">source</a><a href=\"#method.offchain_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.offchain_storage\" class=\"fn\">offchain_storage</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt; as <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sc_client_api/backend/trait.Backend.html#associatedtype.OffchainStorage\" title=\"type sc_client_api::backend::Backend::OffchainStorage\">OffchainStorage</a>&gt;</h4></section></summary><div class='docblock'>Returns a handle to offchain storage.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.usage_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2189\">source</a><a href=\"#method.usage_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.usage_info\" class=\"fn\">usage_info</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sc_client_api/client/struct.UsageInfo.html\" title=\"struct sc_client_api::client::UsageInfo\">UsageInfo</a>&gt;</h4></section></summary><div class='docblock'>Returns current usage statistics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.revert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2220-2224\">source</a><a href=\"#method.revert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.revert\" class=\"fn\">revert</a>(\n    &amp;self,\n    n: &lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>,\n    revert_finalized: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>&gt;), <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Attempts to revert the chain by <code>n</code> blocks. If <code>revert_finalized</code> is set it will attempt to\nrevert past any finalized block, this is unsafe and can potentially leave the node in an\ninconsistent state. All blocks higher than the best block are also reverted and not counting\ntowards <code>n</code>. <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.revert\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_leaf_block\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2360\">source</a><a href=\"#method.remove_leaf_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.remove_leaf_block\" class=\"fn\">remove_leaf_block</a>(&amp;self, hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Discard non-best, unfinalized leaf block.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.blockchain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2426\">source</a><a href=\"#method.blockchain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.blockchain\" class=\"fn\">blockchain</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.BlockchainDb.html\" title=\"struct node_testing::client::sc_client_db::BlockchainDb\">BlockchainDb</a>&lt;Block&gt;</h4></section></summary><div class='docblock'>Returns reference to blockchain backend.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state_at\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2430\">source</a><a href=\"#method.state_at\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.state_at\" class=\"fn\">state_at</a>(\n    &amp;self,\n    hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt; as <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;&gt;::<a class=\"associatedtype\" href=\"sc_client_api/backend/trait.Backend.html#associatedtype.State\" title=\"type sc_client_api::backend::Backend::State\">State</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Returns state backend with post-state of given block.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.have_state_at\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2477\">source</a><a href=\"#method.have_state_at\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#method.have_state_at\" class=\"fn\">have_state_at</a>(\n    &amp;self,\n    hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    number: &lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Number\" title=\"type sp_runtime::traits::Header::Number\">Number</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns true if state for given block is available.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_import_lock\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2507\">source</a><a href=\"#method.get_import_lock\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.get_import_lock\" class=\"fn\">get_import_lock</a>(&amp;self) -&gt; &amp;RwLock&lt;RawRwLock, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Gain access to the import lock around this backend. <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.get_import_lock\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.requires_full_sync\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2511\">source</a><a href=\"#method.requires_full_sync\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.requires_full_sync\" class=\"fn\">requires_full_sync</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tells whether the backend requires full-sync mode.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pin_block\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2518\">source</a><a href=\"#method.pin_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.pin_block\" class=\"fn\">pin_block</a>(&amp;self, hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Pin the block to keep body, justification and state available after pruning.\nNumber of pins are reference counted. Users need to make sure to perform\none call to <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.unpin_block\" title=\"method sc_client_api::backend::Backend::unpin_block::unpin_block\"><code>Self::unpin_block</code></a> per call to <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.pin_block\" title=\"method sc_client_api::backend::Backend::pin_block::pin_block\"><code>Self::pin_block</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unpin_block\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2553\">source</a><a href=\"#method.unpin_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#tymethod.unpin_block\" class=\"fn\">unpin_block</a>(&amp;self, hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>)</h4></section></summary><div class='docblock'>Unpin the block to allow pruning.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_aux\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_api/backend.rs.html#606-616\">source</a><a href=\"#method.insert_aux\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#method.insert_aux\" class=\"fn\">insert_aux</a>&lt;'a, 'b, 'c, I, D&gt;(\n    &amp;self,\n    insert: I,\n    delete: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    'b: 'a,\n    'c: 'a,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = &amp;'a (&amp;'c [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>], &amp;'c [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>])&gt;,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = &amp;'a &amp;'b [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Insert auxiliary data into key-value store.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_aux\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_api/backend.rs.html#620\">source</a><a href=\"#method.get_aux\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.Backend.html#method.get_aux\" class=\"fn\">get_aux</a>(&amp;self, key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Query auxiliary data from key-value store.</div></details></div></details>","Backend<Block>","node_testing::client::Backend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AuxStore-for-Backend%3CBlock%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2034-2036\">source</a><a href=\"#impl-AuxStore-for-Backend%3CBlock%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block&gt; <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a> for <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_aux\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2038-2048\">source</a><a href=\"#method.insert_aux\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.AuxStore.html#tymethod.insert_aux\" class=\"fn\">insert_aux</a>&lt;'a, 'b, 'c, I, D&gt;(\n    &amp;self,\n    insert: I,\n    delete: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    'b: 'a,\n    'c: 'a,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = &amp;'a (&amp;'c [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>], &amp;'c [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>])&gt;,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = &amp;'a &amp;'b [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Insert auxiliary data into key-value store. <a href=\"sc_client_api/backend/trait.AuxStore.html#tymethod.insert_aux\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_aux\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2060\">source</a><a href=\"#method.get_aux\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/backend/trait.AuxStore.html#tymethod.get_aux\" class=\"fn\">get_aux</a>(&amp;self, key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Query auxiliary data from key-value store.</div></details></div></details>","AuxStore","node_testing::client::Backend"],["<section id=\"impl-LocalBackend%3CBlock%3E-for-Backend%3CBlock%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_client_db/lib.rs.html#2562\">source</a><a href=\"#impl-LocalBackend%3CBlock%3E-for-Backend%3CBlock%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block&gt; <a class=\"trait\" href=\"sc_client_api/backend/trait.LocalBackend.html\" title=\"trait sc_client_api::backend::LocalBackend\">LocalBackend</a>&lt;Block&gt; for <a class=\"struct\" href=\"node_testing/client/sc_client_db/struct.Backend.html\" title=\"struct node_testing::client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section>","LocalBackend<Block>","node_testing::client::Backend"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()