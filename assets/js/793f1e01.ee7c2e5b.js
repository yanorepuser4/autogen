"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3779],{9307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=n(5893),d=n(1151);const c={sidebar_label:"embedded_ipython_code_executor",title:"coding.jupyter.embedded_ipython_code_executor"},r=void 0,o={id:"reference/coding/jupyter/embedded_ipython_code_executor",title:"coding.jupyter.embedded_ipython_code_executor",description:"EmbeddedIPythonCodeExecutor",source:"@site/docs/reference/coding/jupyter/embedded_ipython_code_executor.md",sourceDirName:"reference/coding/jupyter",slug:"/reference/coding/jupyter/embedded_ipython_code_executor",permalink:"/autogen/docs/reference/coding/jupyter/embedded_ipython_code_executor",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/coding/jupyter/embedded_ipython_code_executor.md",tags:[],version:"current",frontMatter:{sidebar_label:"embedded_ipython_code_executor",title:"coding.jupyter.embedded_ipython_code_executor"},sidebar:"referenceSideBar",previous:{title:"docker_jupyter_server",permalink:"/autogen/docs/reference/coding/jupyter/docker_jupyter_server"},next:{title:"jupyter_client",permalink:"/autogen/docs/reference/coding/jupyter/jupyter_client"}},i={},a=[{value:"EmbeddedIPythonCodeExecutor",id:"embeddedipythoncodeexecutor",level:2},{value:"UserCapability",id:"usercapability",level:2},{value:"add_to_agent",id:"add_to_agent",level:3},{value:"user_capability",id:"user_capability",level:3},{value:"code_extractor",id:"code_extractor",level:3},{value:"execute_code_blocks",id:"execute_code_blocks",level:3},{value:"restart",id:"restart",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"embeddedipythoncodeexecutor",children:"EmbeddedIPythonCodeExecutor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class EmbeddedIPythonCodeExecutor(BaseModel)\n"})}),"\n",(0,s.jsx)(t.p,{children:"(Experimental) A code executor class that executes code statefully using an embedded\nIPython kernel managed by this class."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"This will execute LLM generated code on the local machine."})}),"\n",(0,s.jsxs)(t.p,{children:["Each execution is stateful and can access variables created from previous\nexecutions in the same session. The kernel must be installed before using\nthis class. The kernel can be installed using the following command:\n",(0,s.jsx)(t.code,{children:"python -m ipykernel install --user --name {kernel_name}"}),"\nwhere ",(0,s.jsx)(t.code,{children:"kernel_name"})," is the name of the kernel to install."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timeout"})," ",(0,s.jsx)(t.em,{children:"int"})," - The timeout for code execution, by default 60."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"kernel_name"})," ",(0,s.jsx)(t.em,{children:"str"}),' - The kernel name to use. Make sure it is installed.\nBy default, it is "python3".']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"output_dir"})," ",(0,s.jsx)(t.em,{children:"str"}),' - The directory to save output files, by default ".".']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"system_message_update"})," ",(0,s.jsx)(t.em,{children:"str"})," - The system message update to add to the\nagent that produces code. By default it is\n",(0,s.jsx)(t.code,{children:"EmbeddedIPythonCodeExecutor.DEFAULT_SYSTEM_MESSAGE_UPDATE"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usercapability",children:"UserCapability"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class UserCapability()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["(Experimental) An AgentCapability class that gives agent ability use a stateful\nIPython code executor. This capability can be added to an agent using\nthe ",(0,s.jsx)(t.code,{children:"add_to_agent"})," method which append a system message update to the\nagent's system message."]}),"\n",(0,s.jsx)(t.h3,{id:"add_to_agent",children:"add_to_agent"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def add_to_agent(agent: LLMAgent) -> None\n"})}),"\n",(0,s.jsx)(t.p,{children:"Add this capability to an agent by appending a system message\nupdate to the agent's system message."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Currently we do not check for conflicts with existing content in\nthe agent's system message."})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"agent"})," ",(0,s.jsx)(t.em,{children:"LLMAgent"})," - The agent to add the capability to."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"user_capability",children:"user_capability"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'@property\ndef user_capability() -> "EmbeddedIPythonCodeExecutor.UserCapability"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["(Experimental) Export a user capability for this executor that can be added to\nan agent using the ",(0,s.jsx)(t.code,{children:"add_to_agent"})," method."]}),"\n",(0,s.jsx)(t.h3,{id:"code_extractor",children:"code_extractor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"@property\ndef code_extractor() -> CodeExtractor\n"})}),"\n",(0,s.jsx)(t.p,{children:"(Experimental) Export a code extractor that can be used by an agent."}),"\n",(0,s.jsx)(t.h3,{id:"execute_code_blocks",children:"execute_code_blocks"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def execute_code_blocks(code_blocks: List[CodeBlock]) -> IPythonCodeResult\n"})}),"\n",(0,s.jsx)(t.p,{children:"(Experimental) Execute a list of code blocks and return the result."}),"\n",(0,s.jsxs)(t.p,{children:["This method executes a list of code blocks as cells in an IPython kernel\nmanaged by this class.\nSee: ",(0,s.jsx)(t.a,{href:"https://jupyter-client.readthedocs.io/en/stable/messaging.html",children:"https://jupyter-client.readthedocs.io/en/stable/messaging.html"}),"\nfor the message protocol."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"code_blocks"})," ",(0,s.jsx)(t.em,{children:"List[CodeBlock]"})," - A list of code blocks to execute."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"IPythonCodeResult"})," - The result of the code execution."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"restart",children:"restart"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def restart() -> None\n"})}),"\n",(0,s.jsx)(t.p,{children:"(Experimental) Restart a new session."})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const d={},c=s.createContext(d);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);