(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{2072:function(a,r,t){"use strict";t.r(r);var n=t(54),e=Object(n.a)({},(function(){var a=this,r=a.$createElement,n=a._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、maven-作为依赖管理工具"}},[a._v("1、Maven 作为依赖管理工具")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1jar-包的规模"}},[a._v("①jar 包的规模")])]),n("li",[n("a",{attrs:{href:"#_2jar-包的来源"}},[a._v("②jar 包的来源")])]),n("li",[n("a",{attrs:{href:"#_3jar-包之间的依赖关系"}},[a._v("③jar 包之间的依赖关系")])])])]),n("li",[n("a",{attrs:{href:"#_2、maven-作为构建管理工具"}},[a._v("2、Maven 作为构建管理工具")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1你没有注意过的构建"}},[a._v("①你没有注意过的构建")])]),n("li",[n("a",{attrs:{href:"#_2脱离-ide-环境仍需构建"}},[a._v("②脱离 IDE 环境仍需构建")])])])]),n("li",[n("a",{attrs:{href:"#_3、结论"}},[a._v("3、结论")])])])]),n("p"),a._v(" "),n("h1",{attrs:{id:"第一节-为什么要学习maven"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一节-为什么要学习maven"}},[a._v("#")]),a._v(" 第一节 为什么要学习Maven？")]),a._v(" "),n("h2",{attrs:{id:"_1、maven-作为依赖管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、maven-作为依赖管理工具"}},[a._v("#")]),a._v(" 1、Maven 作为依赖管理工具")]),a._v(" "),n("h3",{attrs:{id:"_1jar-包的规模"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1jar-包的规模"}},[a._v("#")]),a._v(" ①jar 包的规模")]),a._v(" "),n("p",[a._v("随着我们使用越来越多的框架，或者框架封装程度越来越高，项目中使用的jar包也越来越多。项目中，一个模块里面用到上百个jar包是非常正常的。")]),a._v(" "),n("br"),a._v(" "),n("p",[a._v("比如下面的例子，我们只用到 SpringBoot、SpringCloud 框架中的三个功能：")]),a._v(" "),n("ul",[n("li",[a._v("Nacos 服务注册发现")]),a._v(" "),n("li",[a._v("Web 框架环境")]),a._v(" "),n("li",[a._v("图模板技术 Thymeleaf")])]),a._v(" "),n("br"),a._v(" "),n("p",[a._v("最终却导入了 106 个 jar 包：")]),a._v(" "),n("blockquote",[n("p",[a._v("org.springframework.security:spring-security-rsa:jar:1.0.9.RELEASE:compile               "),n("br"),a._v("\ncom.netflix.ribbon: ribbon:jar:2.3.0:compile                                              "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter-thymeleaf:jar:2.3.6.RELEASE:compile         "),n("br"),a._v("\ncommons-configuration:commons-configuration:jar:1.8:compile                              "),n("br"),a._v("\norg.apache.logging.log4j:log4j-api:jar:2.13.3:compile                                    "),n("br"),a._v("\norg.springframework:spring-beans:jar:5.2.11.RELEASE:compile                              "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-starter-netflix-ribbon:jar:2.2.6.RELEASE:compile  "),n("br"),a._v("\norg.apache.tomcat.embed:tomcat-embed-websocket:jar:9.0.39:compile                        "),n("br"),a._v("\ncom.alibaba.cloud:spring-cloud-alibaba-commons:jar:2.2.6.RELEASE:compile                 "),n("br"),a._v("\norg.bouncycastle:bcprov-jdk15on:jar:1.64:compile                                         "),n("br"),a._v("\norg.springframework.security:spring-security-crypto:jar:5.3.5.RELEASE:compile            "),n("br"),a._v("\norg.apache.httpcomponents:httpasyncclient:jar:4.1.4:compile                              "),n("br"),a._v("\ncom.google.j2objc:j2objc-annotations:jar:1.3:compile                                     "),n("br"),a._v("\ncom.fasterxml.jackson.core:jackson-databind:jar:2.11.3:compile                           "),n("br"),a._v("\nio.reactivex:rxjava:jar:1.3.8:compile                                                    "),n("br"),a._v("\nch.qos.logback:logback-classic:jar:1.2.3:compile                                         "),n("br"),a._v("\norg.springframework:spring-web:jar:5.2.11.RELEASE:compile                                "),n("br"),a._v("\nio.reactivex:rxnetty-servo:jar:0.4.9:runtime                                             "),n("br"),a._v("\norg.springframework:spring-core:jar:5.2.11.RELEASE:compile                               "),n("br"),a._v("\nio.github.openfeign.form:feign-form-spring:jar:3.8.0:compile                             "),n("br"),a._v("\nio.github.openfeign.form:feign-form:jar:3.8.0:compile                                    "),n("br"),a._v("\ncom.netflix.ribbon:ribbon-loadbalancer:jar:2.3.0:compile                                 "),n("br"),a._v("\norg.apache.httpcomponents:httpcore:jar:4.4.13:compile                                    "),n("br"),a._v("\norg.thymeleaf.extras:thymeleaf-extras-java8time:jar:3.0.4.RELEASE:compile                "),n("br"),a._v("\norg.slf4j:jul-to-slf4j:jar:1.7.30:compile                                                "),n("br"),a._v("\ncom.atguigu.demo:demo09-base-entity:jar:1.0-SNAPSHOT:compile                             "),n("br"),a._v("\norg.yaml:snakeyaml:jar:1.26:compile                                                      "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter-logging:jar:2.3.6.RELEASE:compile           "),n("br"),a._v("\nio.reactivex:rxnetty-contexts:jar:0.4.9:runtime                                          "),n("br"),a._v("\norg.apache.httpcomponents:httpclient:jar:4.5.13:compile                                  "),n("br"),a._v("\nio.github.openfeign:feign-core:jar:10.10.1:compile                                       "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter-aop:jar:2.3.6.RELEASE:compile               "),n("br"),a._v("\norg.hdrhistogram:HdrHistogram:jar:2.1.9:compile                                          "),n("br"),a._v("\norg.springframework:spring-context:jar:5.2.11.RELEASE:compile                            "),n("br"),a._v("\ncommons-lang:commons-lang:jar:2.6:compile                                                "),n("br"),a._v("\nio.prometheus:simpleclient:jar:0.5.0:compile                                             "),n("br"),a._v("\nch.qos.logback:logback-core:jar:1.2.3:compile                                            "),n("br"),a._v("\norg.springframework:spring-webmvc:jar:5.2.11.RELEASE:compile                             "),n("br"),a._v("\ncom.sun.jersey:jersey-core:jar:1.19.1:runtime                                            "),n("br"),a._v("\njavax.ws.rs:jsr311-api:jar:1.1.1:runtime                                                 "),n("br"),a._v("\njavax.inject:javax.inject:jar:1:runtime                                                  "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-openfeign-core:jar:2.2.6.RELEASE:compile          "),n("br"),a._v("\ncom.netflix.ribbon:ribbon-core:jar:2.3.0:compile                                         "),n("br"),a._v("\ncom.netflix.hystrix:hystrix-core:jar:1.5.18:compile                                      "),n("br"),a._v("\ncom.netflix.ribbon:ribbon-transport:jar:2.3.0:runtime                                    "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter-json:jar:2.3.6.RELEASE:compile              "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-starter-openfeign:jar:2.2.6.RELEASE:compile       "),n("br"),a._v("\ncom.fasterxml.jackson.module:jackson-module-parameter-names:jar:2.11.3:compile           "),n("br"),a._v("\ncom.sun.jersey.contribs:jersey-apache-client4:jar:1.19.1:runtime                         "),n("br"),a._v("\nio.github.openfeign:feign-hystrix:jar:10.10.1:compile                                    "),n("br"),a._v("\nio.github.openfeign:feign-slf4j:jar:10.10.1:compile                                      "),n("br"),a._v("\ncom.alibaba.nacos:nacos-client:jar:1.4.2:compile                                         "),n("br"),a._v("\norg.apache.httpcomponents:httpcore-nio:jar:4.4.13:compile                                "),n("br"),a._v("\ncom.sun.jersey:jersey-client:jar:1.19.1:runtime                                          "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-context:jar:2.2.6.RELEASE:compile                 "),n("br"),a._v("\norg.glassfish:jakarta.el:jar:3.0.3:compile                                               "),n("br"),a._v("\norg.apache.logging.log4j:log4j-to-slf4j:jar:2.13.3:compile                               "),n("br"),a._v("\ncom.fasterxml.jackson.datatype:jackson-datatype-jsr310:jar:2.11.3:compile                "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-commons:jar:2.2.6.RELEASE:compile                 "),n("br"),a._v("\norg.aspectj:aspectjweaver:jar:1.9.6:compile                                              "),n("br"),a._v("\ncom.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery:jar:2.2.6.RELEASE:compile "),n("br"),a._v("\ncom.google.guava:listenablefuture:jar:9999.0-empty-to-avoid-conflict-with-guava:compile  "),n("br"),a._v("\ncom.alibaba.spring:spring-context-support:jar:1.0.10:compile                             "),n("br"),a._v("\njakarta.annotation:jakarta.annotation-api:jar:1.3.5:compile                              "),n("br"),a._v("\norg.bouncycastle:bcpkix-jdk15on:jar:1.64:compile                                         "),n("br"),a._v("\ncom.netflix.netflix-commons:netflix-commons-util:jar:0.3.0:runtime                       "),n("br"),a._v("\ncom.fasterxml.jackson.core:jackson-annotations:jar:2.11.3:compile                        "),n("br"),a._v("\ncom.google.guava:guava:jar:29.0-jre:compile                                              "),n("br"),a._v("\ncom.google.guava:failureaccess:jar:1.0.1:compile                                         "),n("br"),a._v("\norg.springframework.boot:spring-boot:jar:2.3.6.RELEASE:compile                           "),n("br"),a._v("\ncom.fasterxml.jackson.datatype:jackson-datatype-jdk8:jar:2.11.3:compile                  "),n("br"),a._v("\ncom.atguigu.demo:demo08-base-api:jar:1.0-SNAPSHOT:compile                                "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-starter-netflix-archaius:jar:2.2.6.RELEASE:compile"),n("br"),a._v("\norg.springframework.boot:spring-boot-autoconfigure:jar:2.3.6.RELEASE:compile             "),n("br"),a._v("\norg.slf4j:slf4j-api:jar:1.7.30:compile                                                   "),n("br"),a._v("\ncommons-io:commons-io:jar:2.7:compile                                                    "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-starter:jar:2.2.6.RELEASE:compile                 "),n("br"),a._v("\norg.apache.tomcat.embed:tomcat-embed-core:jar:9.0.39:compile                             "),n("br"),a._v("\nio.reactivex:rxnetty:jar:0.4.9:runtime                                                   "),n("br"),a._v("\ncom.fasterxml.jackson.core:jackson-core:jar:2.11.3:compile                               "),n("br"),a._v("\ncom.google.code.findbugs:jsr305:jar:3.0.2:compile                                        "),n("br"),a._v("\ncom.netflix.archaius:archaius-core:jar:0.7.6:compile                                     "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter-web:jar:2.3.6.RELEASE:compile               "),n("br"),a._v("\ncommons-codec:commons-codec:jar:1.14:compile                                             "),n("br"),a._v("\ncom.netflix.servo:servo-core:jar:0.12.21:runtime                                         "),n("br"),a._v("\ncom.google.errorprone:error_prone_annotations:jar:2.3.4:compile                          "),n("br"),a._v("\norg.attoparser:attoparser:jar:2.0.5.RELEASE:compile                                      "),n("br"),a._v("\ncom.atguigu.demo:demo10-base-util:jar:1.0-SNAPSHOT:compile                               "),n("br"),a._v("\norg.checkerframework:checker-qual:jar:2.11.1:compile                                     "),n("br"),a._v("\norg.thymeleaf:thymeleaf-spring5:jar:3.0.11.RELEASE:compile                               "),n("br"),a._v("\ncommons-fileupload:commons-fileupload:jar:1.4:compile                                    "),n("br"),a._v("\ncom.netflix.ribbon:ribbon-httpclient:jar:2.3.0:compile                                   "),n("br"),a._v("\ncom.netflix.netflix-commons:netflix-statistics:jar:0.1.1:runtime                         "),n("br"),a._v("\norg.unbescape:unbescape:jar:1.1.6.RELEASE:compile                                        "),n("br"),a._v("\norg.springframework:spring-jcl:jar:5.2.11.RELEASE:compile                                "),n("br"),a._v("\ncom.alibaba.nacos:nacos-common:jar:1.4.2:compile                                         "),n("br"),a._v("\ncommons-collections:commons-collections:jar:3.2.2:runtime                                "),n("br"),a._v("\njavax.persistence:persistence-api:jar:1.0:compile                                        "),n("br"),a._v("\ncom.alibaba.nacos:nacos-api:jar:1.4.2:compile                                            "),n("br"),a._v("\norg.thymeleaf:thymeleaf:jar:3.0.11.RELEASE:compile                                       "),n("br"),a._v("\norg.springframework:spring-aop:jar:5.2.11.RELEASE:compile                                "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter:jar:2.3.6.RELEASE:compile                   "),n("br"),a._v("\norg.springframework.boot:spring-boot-starter-tomcat:jar:2.3.6.RELEASE:compile            "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-netflix-ribbon:jar:2.2.6.RELEASE:compile          "),n("br"),a._v("\norg.springframework:spring-expression:jar:5.2.11.RELEASE:compile                         "),n("br"),a._v("\norg.springframework.cloud:spring-cloud-netflix-archaius:jar:2.2.6.RELEASE:compile")])]),a._v(" "),n("p",[a._v("而如果使用 Maven 来引入这些 jar 包只需要配置三个『"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("依赖")]),a._v("』：")]),a._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[a._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- Nacos 服务注册发现启动器 --\x3e")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.alibaba.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-alibaba-nacos-discovery"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- web启动器依赖 --\x3e")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-starter-web"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 视图模板技术 thymeleaf --\x3e")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-starter-thymeleaf"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])]),n("h3",{attrs:{id:"_2jar-包的来源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2jar-包的来源"}},[a._v("#")]),a._v(" ②jar 包的来源")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("这个jar包所属技术的官网。官网通常是英文界面，网站的结构又不尽相同，甚至找到下载链接还发现需要通过特殊的工具下载。")])]),a._v(" "),n("li",[n("p",[a._v("第三方网站提供下载。问题是不规范，在使用过程中会出现各种问题。")]),a._v(" "),n("ul",[n("li",[a._v("jar包的名称")]),a._v(" "),n("li",[a._v("jar包的版本")]),a._v(" "),n("li",[a._v("jar包内的具体细节")])])]),a._v(" "),n("li",[n("p",[a._v("而使用 Maven 后，依赖对应的 jar 包能够"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("自动下载")]),a._v("，方便、快捷又规范。")])])]),a._v(" "),n("h3",{attrs:{id:"_3jar-包之间的依赖关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3jar-包之间的依赖关系"}},[a._v("#")]),a._v(" ③jar 包之间的依赖关系")]),a._v(" "),n("p",[a._v("框架中使用的 jar 包，不仅数量庞大，而且彼此之间存在错综复杂的依赖关系。依赖关系的复杂程度，已经上升到了完全不能靠人力手动解决的程度。另外，jar 包之间有可能产生冲突。进一步增加了我们在 jar 包使用过程中的难度。")]),a._v(" "),n("p",[a._v("下面是前面例子中  jar 包之间的依赖关系：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(783),alt:"images"}})]),a._v(" "),n("p",[a._v("而实际上 jar 包之间的依赖关系是普遍存在的，如果要由程序员手动梳理无疑会增加极高的学习成本，而这些工作又对实现业务功能毫无帮助。")]),a._v(" "),n("p",[a._v("而使用 Maven 则几乎不需要管理这些关系，极个别的地方调整一下即可，极大的减轻了我们的工作量。")]),a._v(" "),n("h2",{attrs:{id:"_2、maven-作为构建管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、maven-作为构建管理工具"}},[a._v("#")]),a._v(" 2、Maven 作为构建管理工具")]),a._v(" "),n("h3",{attrs:{id:"_1你没有注意过的构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1你没有注意过的构建"}},[a._v("#")]),a._v(" ①你没有注意过的构建")]),a._v(" "),n("p",[a._v("你可以不使用 Maven，但是构建必须要做。当我们使用 IDEA 进行开发时，构建是 IDEA 替我们做的。")]),a._v(" "),n("h3",{attrs:{id:"_2脱离-ide-环境仍需构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2脱离-ide-环境仍需构建"}},[a._v("#")]),a._v(" ②脱离 IDE 环境仍需构建")]),a._v(" "),n("p",[n("img",{attrs:{src:t(784),alt:"images"}})]),a._v(" "),n("h2",{attrs:{id:"_3、结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、结论"}},[a._v("#")]),a._v(" 3、结论")]),a._v(" "),n("ul",[n("li",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("管理规模庞大的 jar 包，需要"),n("span",{staticStyle:{color:"red"}},[a._v("专门")]),a._v("工具。")])]),a._v(" "),n("li",[n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("脱离 IDE 环境执行构建操作，需要"),n("span",{staticStyle:{color:"red"}},[a._v("专门")]),a._v("工具。")])])]),a._v(" "),n("p",[n("br"),n("br"),n("br")]),a._v(" "),n("p",[n("RouterLink",{attrs:{to:"/pro002-maven/chapter01/index.html"}},[a._v("回目录")]),a._v(" "),n("RouterLink",{attrs:{to:"/pro002-maven/chapter01/verse02.html"}},[a._v("下一节")])],1)])}),[],!1,null,null,null);r.default=e.exports},783:function(a,r,t){a.exports=t.p+"assets/img/img006.ab4f2e31.png"},784:function(a,r,t){a.exports=t.p+"assets/img/img010.74e515e5.png"}}]);