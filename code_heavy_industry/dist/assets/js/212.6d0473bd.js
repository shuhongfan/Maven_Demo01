(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{2075:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、maven-官网地址"}},[t._v("1、Maven 官网地址")])]),n("li",[n("a",{attrs:{href:"#_2、解压maven核心程序"}},[t._v("2、解压Maven核心程序")])]),n("li",[n("a",{attrs:{href:"#_3、指定本地仓库"}},[t._v("3、指定本地仓库")])]),n("li",[n("a",{attrs:{href:"#_4、配置阿里云提供的镜像仓库"}},[t._v("4、配置阿里云提供的镜像仓库")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1将原有的例子配置注释掉"}},[t._v("①将原有的例子配置注释掉")])]),n("li",[n("a",{attrs:{href:"#_2加入我们的配置"}},[t._v("②加入我们的配置")])])])]),n("li",[n("a",{attrs:{href:"#_5、配置-maven-工程的基础-jdk-版本"}},[t._v("5、配置 Maven 工程的基础 JDK 版本")])])])]),n("p"),t._v(" "),n("h1",{attrs:{id:"第一节-maven核心程序解压与配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一节-maven核心程序解压与配置"}},[t._v("#")]),t._v(" 第一节 Maven核心程序解压与配置")]),t._v(" "),n("h2",{attrs:{id:"_1、maven-官网地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、maven-官网地址"}},[t._v("#")]),t._v(" 1、Maven 官网地址")]),t._v(" "),n("p",[t._v("首页：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven – Welcome to Apache Maven"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("下载页面：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven – Download Apache Maven"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("下载链接：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(787),alt:"images"}})]),t._v(" "),n("p",[t._v("具体下载地址：https://dlcdn.apache.org/maven/maven-3/3.8.4/binaries/apache-maven-3.8.4-bin.zip")]),t._v(" "),n("h2",{attrs:{id:"_2、解压maven核心程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、解压maven核心程序"}},[t._v("#")]),t._v(" 2、解压Maven核心程序")]),t._v(" "),n("p",[t._v("核心程序压缩包：apache-maven-3.8.4-bin.zip，解压到"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("非中文、没有空格")]),t._v("的目录。例如：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(788),alt:"images"}})]),t._v(" "),n("p",[t._v("在解压目录中，我们需要着重关注 Maven 的核心配置文件："),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("conf/settings.xml")])]),t._v(" "),n("h2",{attrs:{id:"_3、指定本地仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、指定本地仓库"}},[t._v("#")]),t._v(" 3、指定本地仓库")]),t._v(" "),n("p",[t._v("本地仓库默认值：用户家目录/.m2/repository。由于本地仓库的默认位置是在用户的家目录下，而家目录往往是在 C 盘，也就是系统盘。将来 Maven 仓库中 jar 包越来越多，仓库体积越来越大，可能会拖慢 C 盘运行速度，影响系统性能。所以建议将 Maven 的本地仓库放在其他盘符下。配置方式如下：")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- localRepository\n| The path to the local repository maven will use to store artifacts.\n|\n| Default: ${user.home}/.m2/repository\n<localRepository>/path/to/local/repo</localRepository>\n--\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("localRepository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("D:\\maven-repository"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("localRepository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("本地仓库这个目录，我们手动创建一个空的目录即可。")]),t._v(" "),n("p",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("记住")]),t._v("：一定要把 localRepository 标签"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("从注释中拿出来")]),t._v("。")]),t._v(" "),n("p",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("注意")]),t._v("：本地仓库本身也需要使用一个"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("非中文、没有空格")]),t._v("的目录。")]),t._v(" "),n("h2",{attrs:{id:"_4、配置阿里云提供的镜像仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置阿里云提供的镜像仓库"}},[t._v("#")]),t._v(" 4、配置阿里云提供的镜像仓库")]),t._v(" "),n("p",[t._v("Maven 下载 jar 包默认访问境外的中央仓库，而国外网站速度很慢。改成阿里云提供的镜像仓库，"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("访问国内网站")]),t._v("，可以让 Maven 下载 jar 包的时候速度更快。配置的方式是：")]),t._v(" "),n("h3",{attrs:{id:"_1将原有的例子配置注释掉"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1将原有的例子配置注释掉"}},[t._v("#")]),t._v(" ①将原有的例子配置注释掉")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- <mirror>\n  <id>maven-default-http-blocker</id>\n  <mirrorOf>external:http:*</mirrorOf>\n  <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n  <url>http://0.0.0.0/</url>\n  <blocked>true</blocked>\n</mirror> --\x3e")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h3",{attrs:{id:"_2加入我们的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2加入我们的配置"}},[t._v("#")]),t._v(" ②加入我们的配置")]),t._v(" "),n("p",[t._v("将下面 mirror 标签整体复制到 settings.xml 文件的 mirrors 标签的内部。")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("nexus-aliyun"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Nexus aliyun"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/groups/public"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h2",{attrs:{id:"_5、配置-maven-工程的基础-jdk-版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、配置-maven-工程的基础-jdk-版本"}},[t._v("#")]),t._v(" 5、配置 Maven 工程的基础 JDK 版本")]),t._v(" "),n("p",[t._v("如果按照默认配置运行，Java 工程使用的默认 JDK 版本是 1.5，而我们熟悉和常用的是 JDK 1.8 版本。修改配置的方式是：将 profile 标签整个复制到 settings.xml 文件的 profiles 标签内。")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jdk-1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeByDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeByDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.compilerVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.compilerVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[n("RouterLink",{attrs:{to:"/pro002-maven/chapter02/index.html"}},[t._v("回目录")]),t._v(" "),n("RouterLink",{attrs:{to:"/pro002-maven/chapter02/verse02.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);a.default=e.exports},787:function(t,a,s){t.exports=s.p+"assets/img/img015.9ab3ebd3.png"},788:function(t,a){t.exports="data:image/png;base64,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"}}]);