var documenterSearchIndex = {"docs":
[{"location":"faq/JuliaAndCpp/#Programming-Language-(Julia,-C)-Frequently-Asked-Questions","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++) Frequently Asked Questions","text":"","category":"section"},{"location":"faq/JuliaAndCpp/#Should-I-use-the-Julia-or-C-version-of-ITensor?","page":"Programming Language (Julia, C++, ...) FAQs","title":"Should I use the Julia or C++ version of ITensor?","text":"","category":"section"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"We recommend the Julia version of ITensor for most people, because:","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Julia ITensor has more and newer features than C++ ITensor, and we are developing it more rapidly\nJulia is a more productive language than C++ with more built-in features, such as linear algebra, iteration tools, etc.\nJulia is a compiled language with performance rivaling C++ (see next question below for a longer discussion)\nJulia has a rich ecosystem with a package manager, many well-designed libraries, and helpful tutorials","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Even if Julia is not available by default on your computer cluster, it is easy to set up your own local install of Julia on a cluster.","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"However, some good reasons to use the C++ version of ITensor are:","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"using ITensor within existing C++ codes\nyou already have expertise in C++ programming\nmultithreading support in C++, such as with OpenMP, offer certain sophisticated features compared to Julia multithreading (though Julia's support for multithreading has other benefits such as composability and is rapidly improving)\nyou need other specific features of C++, such as control over memory management or instant start-up times","category":"page"},{"location":"faq/JuliaAndCpp/#Which-is-faster:-Julia-or-C-?","page":"Programming Language (Julia, C++, ...) FAQs","title":"Which is faster: Julia or C++ ?","text":"","category":"section"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Julia and C++ offer about the same performance.","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Each language gets compiled to optimized assembly code and offer arrays and containers which can efficiently stored and iterated. Well-written Julia code can be even faster than comparable C++ codes in many cases.","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"The longer answer is of course that it depends:","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Julia is a more productive language than C++, with many highly-optimized libraries for numerical computing tasks, and excellent tools for profiling and benchmarking. These features help significantly to tune Julia codes for optimal performance.\nC++ offers much more fine-grained control over memory management, which can enhance performance in certain applications and control memory usage.\nJulia codes can slow down significantly during refactoring or when introducing new code if certain best practices are not followed. The most important of these is writing type-stable code. For more details see the Performance Tips section of the Julia documentation.\nC++ applications start instantly, while Julia codes can be slow to start. However, if this start-up time is subtracted, the rest of the time of running a Julia application is similar to C++.","category":"page"},{"location":"faq/JuliaAndCpp/#Why-did-you-choose-Julia-over-Python-for-ITensor?","page":"Programming Language (Julia, C++, ...) FAQs","title":"Why did you choose Julia over Python for ITensor?","text":"","category":"section"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Julia offers much better performance than Python, while still having nearly all of Python's benefits. One consequence is that ITensor can be written purely in Julia, whereas to write high-performance Python libraries it is necessary to implement many parts in C or C++ (the \"two-language problem\").","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"The main reasons Julia codes can easily outperform Python codes are:","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Julia is a (just-in-time) compiled language with functions specialized for the types of the arguments passed to them\nJulia arrays and containers are specialized to the types they contain, and perform similarly to C or C++ arrays when all elements have the same type\nJulia has sophisticated support for multithreading while Python has significant problems with multithreading","category":"page"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"Of course there are some drawbacks of Julia compared to Python, including a less mature ecosystem of libraries (though it is simple to call Python libraries from Julia using PyCall), and less widespread adoption.","category":"page"},{"location":"faq/JuliaAndCpp/#Is-Julia-ITensor-a-wrapper-around-the-C-version?","page":"Programming Language (Julia, C++, ...) FAQs","title":"Is Julia ITensor a wrapper around the C++ version?","text":"","category":"section"},{"location":"faq/JuliaAndCpp/","page":"Programming Language (Julia, C++, ...) FAQs","title":"Programming Language (Julia, C++, ...) FAQs","text":"No. The Julia version of ITensor is a complete, ground-up port of the ITensor library to the Julia language and is written 100% in Julia.","category":"page"},{"location":"faq/HPC/#High-Performance-Computing-(HPC)-Frequently-Asked-Questions","page":"High-Performance Computing FAQs","title":"High Performance Computing (HPC) Frequently Asked Questions","text":"","category":"section"},{"location":"faq/HPC/#My-code-is-using-a-lot-of-RAM-what-can-I-do-about-this?","page":"High-Performance Computing FAQs","title":"My code is using a lot of RAM - what can I do about this?","text":"","category":"section"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"Tensor network algorithms can often use a large amount of RAM. On top of this essential fact, the Julia programming languge is \"garbage collected\" which means that unused memory isn't given back to the operating system right away, but only when the Julia runtime dynamically reclaims it. When your code allocates memory very rapidly, this can lead to high memory usage overall.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"Fortunately there are various steps you can take to keep the memory usage of your code under control.","category":"page"},{"location":"faq/HPC/#1.-Avoid-Repeatedly-Allocating,-Especially-in-Fast-or-\"Hot\"-Loops","page":"High-Performance Computing FAQs","title":"1. Avoid Repeatedly Allocating, Especially in Fast or \"Hot\" Loops","text":"","category":"section"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"More memory gets used whenever your code \"allocates\", which happens most commonly when you use dynamic storage types like Vector and Matrix. If you have a code pattern where you allocate or resize an array or vector inside a 'hot' loop, meaning a loop that iterates quickly very many times, the memory from the previous allocations may pile up very quickly before the next garbage collector run.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"To avoid this, allocate the array once before the loop begins if possible, then overwrite its contents during each iteration. More generally, try as much as possible to estimate the sizes of dynamic resources ahead of time. Or do one allocation that creates a large enough \"workspace\" that dynamic algorithms can reuse part of without reallocating the whole workspace (i.e. making a large array once then using portions of it when smaller arrays are needed).","category":"page"},{"location":"faq/HPC/#2.-Use-the-heap-size-hint-Flag","page":"High-Performance Computing FAQs","title":"2. Use the --heap-size-hint Flag","text":"","category":"section"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"A simple step you can take to help with overall memory usage is to pass the --heap-size-hint flag to the Julia program when you start it. For example, you can call Julia as:","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"julia --heap-size-hint=60G","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"When you pass this heap size, Julia will try to keep the memory usage at or below this value if possible.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"In cases where this does not work, your code simply may be allocating too much memory. Be sure not to allocate over and over again inside of \"hot\" loops which execute many times.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"Another possibility is that you are simply working with a tensor network with large bond dimensions, which may fundamentally use a lot of memory. In those cases, you can try to use features such as \"write to disk mode\" of the ITensor DMRG code or other related techniques. (See the write_when_maxdim_exceeds keyword of the ITensor dmrg function.)","category":"page"},{"location":"faq/HPC/#3.-In-Rare-Case,-Force-a-Garbage-Collection-Run","page":"High-Performance Computing FAQs","title":"3. In Rare Case, Force a Garbage Collection Run","text":"","category":"section"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"In some rare cases, such as when your code cannot be optimized to avoid any more allocations or when the --heap-size-hint provided above is not affecting the behavior of the Julia garbage collector, you can force the garbage collector (GC) to run at a specific point in your code by calling:","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"GC.gc()","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"Alternatively, you can call GC.gc(true) to force a \"full run\" rather than just collecting a more 'young' subset of previous allocations.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"While this approach works well to reduce memory usage, it can have the unfortunate downside of slowing down your code each time the garbage collector runs, which can be especially harmful to multithreaded or parallel algorithms. Therefore, if this approach must be used try calling GC.gc() as infrequently as possible and ideally only in the outermost functions and loops of your code (highest levels of your code).","category":"page"},{"location":"faq/HPC/#Can-Julia-Be-Used-to-Perform-Parallel,-Distributed-Calculations-on-Large-Clusters?","page":"High-Performance Computing FAQs","title":"Can Julia Be Used to Perform Parallel, Distributed Calculations on Large Clusters?","text":"","category":"section"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"Yes. The Julia ecosystem offers multiple approaches to parallel computing across multiple machines including on large HPC clusters and including GPU resources.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"For an overall view of some of these options, the Julia on HPC Clusters website is a good resource.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"Some of the leading approaches to parallelism in Julia are:","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"MPI, through the MPI.jl package. Has the advantage of optionally using an MPI backend that is optimized for a particular cluster and possibly using fast interconnects like Infiniband.\nDagger, a framework for parallel computing across all kinds of resources, like CPUs and GPUs, and across multiple threads and multiple servers.\nDistributed. Part of the base Julia library, giving tools to perform calculations distributed across multiple machines.","category":"page"},{"location":"faq/HPC/#Does-My-Cluster-Admin-Have-to-Install-Julia-for-Me?-What-are-the-Best-Practices-for-Installing-Julia-on-Clusters?","page":"High-Performance Computing FAQs","title":"Does My Cluster Admin Have to Install Julia for Me? What are the Best Practices for Installing Julia on Clusters?","text":"","category":"section"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"The most common approach to installing and using Julia on clusters is for users to install their own Julia binary and dependencies, which is quite easy to do. However, for certain libraries like MPI.jl, there may be MPI backends that are preferred by the cluster administrator. Fortunately, it is possible for admins to set global defaults for such backends and other library preferences.","category":"page"},{"location":"faq/HPC/","page":"High-Performance Computing FAQs","title":"High-Performance Computing FAQs","text":"For more information on best practices for installing Julia on clusters, see the Julia on HPC Clusters website.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"EditURL = \"../../examples/README.jl\"","category":"page"},{"location":"#ITensor-ecosystem-documentation","page":"Introduction","title":"ITensor ecosystem documentation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Welcome to the ITensor ecosystem documentation! This is an aggregation of the documentation of various packages in the ITensor ecosystem, such as ITensors.jl and ITensorMPS.jl.","category":"page"},{"location":"#Support","page":"Introduction","title":"Support","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"<img class=\"display-light-only\" src=\"assets/CCQ.png\" width=\"20%\" alt=\"Flatiron Center for Computational Quantum Physics logo.\"/>\n<img class=\"display-dark-only\" src=\"assets/CCQ-dark.png\" width=\"20%\" alt=\"Flatiron Center for Computational Quantum Physics logo.\"/>","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"ITensor is supported by the Flatiron Institute, a division of the Simons Foundation.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This page was generated using Literate.jl.","category":"page"}]
}
