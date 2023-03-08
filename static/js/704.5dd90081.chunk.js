"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[704],{2704:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r,i,a,o,s,c,l,d=t(4942),x=t(2791),p=t(9434),m=(t(1538),t(6916)),u=function(n){return n.contacts.items},h=function(n){return n.filter.filter},f=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},b=(0,m.P1)([u,h],(function(n,e){var t=e.toLowerCase().trim();return n.filter((function(n){var r=n.name,i=n.number;return r.toLowerCase().includes(t)||i.includes(e)})).sort((function(n,e){return n.name.localeCompare(e.name)}))})),j=t(3634),w=t(3165),y=t(5705),Z=t(5984),v=t(1686),C=t(168),k=t(6088),F=(0,k.Z)(y.l0)(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 0px;\n"]))),I=(0,k.Z)(y.gN)(i||(i=(0,C.Z)(["\n  width: 240px;\n  margin-top: 2px;\n  outline: none;\n  border: none;\n  border-radius: 8px;\n  height: 25px;\n  appearance: none;\n  transition: all 0.2s ease-in-out;\n\n  &:focus {\n    box-shadow: inset 1px 1px 2px #737171, inset -1px -1px 2px #737171;\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 100%;\n    margin: 2px 0;\n  }\n"]))),z=k.Z.button(a||(a=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  outline: none;\n  border: none;\n  width: 100px;\n  height: 25px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  cursor: pointer;\n\n  &:focus,\n  :hover {\n    background-color: #00a226;\n    transform: scale(1.15);\n  }\n\n  &:active {\n    background-color: #18c20ef2;\n    transform: scale(0.95);\n  }\n\n  transition: all 0.2s ease-in-out;\n"]))),N=t(3329),A=function(){return(0,Z.x0)()},D={name:"",number:""};function L(){var n=(0,p.I0)(),e=(0,p.v9)(u),t=A(),r=A();return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(y.J9,{initialValues:D,onSubmit:function(t,r){var i=t.name,a=t.number,o=r.resetForm;if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))||e.find((function(n){return n.number===a})))return v.Notify.warning('"'.concat(i,'" or "').concat(a,'" is already in contacts.')),void o();n(j.addContact({name:i,number:a})),v.Notify.success('Contact is "'.concat(i,'" added')),o()},children:(0,N.jsxs)(F,{autoComplete:"on",children:[(0,N.jsxs)("label",{htmlFor:t,children:[(0,N.jsx)("p",{children:"Name"}),(0,N.jsx)(I,{id:t,type:"text",name:"name",placeholder:"Full name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,N.jsx)(y.Bc,{name:"name"})]}),(0,N.jsxs)("label",{htmlFor:r,children:[(0,N.jsx)("p",{children:"Number"}),(0,N.jsx)(I,{id:r,type:"tel",name:"number",placeholder:"111-11-11",pattern:"\\+?\\d{0,3}[-.\\s]?\\(?\\d{1,3}\\)?[-.\\s]?\\d{1,3}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,12}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,N.jsx)(y.Bc,{name:"number"})]}),(0,N.jsx)(z,{type:"submit",children:"Add contact"})]})})})}var _=k.Z.div(o||(o=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 95px;\n  width: 420px;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid white;\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    justify-content: center;\n    gap: 25px;\n    text-align: center;\n  }\n"]))),B=k.Z.label(s||(s=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: content;\n  @media only screen and (max-width: 768px) {\n    align-items: center;\n  }\n"]))),P=k.Z.input(c||(c=(0,C.Z)(["\n  width: 200px;\n  margin-top: 6px;\n  outline: none;\n  border: none;\n  border-radius: 8px;\n  height: 25px;\n  appearance: none;\n  background-color: white;\n\n  transition: all 0.2s ease-in-out;\n  &:focus {\n    box-shadow: inset 1px 1px 2px #737171, inset -1px -1px 2px #737171;\n  }\n  @media only screen and (max-width: 768px) {\n    width: 100%;\n  }\n"]))),q=k.Z.h2(l||(l=(0,C.Z)(["\n  font-size: 34px;\n  margin-bottom: 12px;\n  @media only screen and (max-width: 768px) {\n    font-size: 24px;\n  }\n"])));function J(){var n=(0,p.I0)(),e=(0,p.v9)(h)||"",t=(0,p.v9)(u)||[],r=t.length;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(q,{children:"Contacts"}),(0,N.jsxs)(_,{children:[t.length?(0,N.jsxs)(B,{children:["Find contacts by name:",(0,N.jsx)(P,{type:"text",value:e,onChange:function(e){var t=e.target.value.trim();"string"===typeof t&&n(w.setFilter(t))}})]}):(0,N.jsx)("p",{children:"Your phonebook is empty. Please add contact."}),t.length>0&&(0,N.jsxs)("p",{children:["Total contacts: ",r]})]})]})}var S,E,M,R,T,V,Y=t(674),$=t(9482),G=k.Z.ul(S||(S=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 420px;\n  padding: 0;\n  @media only screen and (max-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-start;\n    height: 100vh;\n  }\n"]))),H=k.Z.li(E||(E=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 380px;\n\n  @media only screen and (max-width: 768px) {\n    min-width: 0;\n    width: 85%;\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n"]))),K=(0,k.Z)($.uaR)(M||(M=(0,C.Z)(["\n  color: red;\n  cursor: pointer;\n"]))),O=k.Z.div(R||(R=(0,C.Z)(["\n  display: flex;\n  gap: 50px;\n  max-width: 400px;\n"]))),Q=k.Z.p(T||(T=(0,C.Z)(["\n  width: 200px;\n  font-weight: 400;\n"]))),U=k.Z.p(V||(V=(0,C.Z)(["\n  width: 150px;\n"])));function W(n){var e=n.name,t=n.number,r=n.id,i=(0,p.I0)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(O,{children:[(0,N.jsx)(Q,{children:e}),(0,N.jsx)(U,{children:t})]}),(0,N.jsx)(K,{onClick:function(){i(j.deleteContact(r)),v.Notify.success('"'.concat(e,'" has been deleted.'))},size:"22px",title:"Delete contact","aria-label":"Delete contact"})]})}function X(){var n=(0,p.v9)(b),e=(0,p.v9)(f),t=(0,p.v9)(g);return(0,N.jsxs)(N.Fragment,{children:[e?(0,N.jsx)(Y.Z,{}):t&&(0,N.jsx)("p",{style:{color:"red"},children:"Sorry, something went wrong, try again."}),(0,N.jsx)(G,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,N.jsx)(H,{children:(0,N.jsx)(W,{name:t,number:r,id:e})},e)}))})]})}var nn=t(2950),en=t(4554);function tn(){var n,e=(0,p.I0)(),t=(0,p.v9)(f),r=(0,nn.Z)();return(0,x.useEffect)((function(){e(j.fetchContacts())}),[e]),(0,N.jsxs)(en.Z,{sx:(n={display:"flex",justifyContent:"space-evenly"},(0,d.Z)(n,r.breakpoints.down("sm"),{gap:2,flexDirection:"column",alignItems:"center"}),(0,d.Z)(n,r.breakpoints.up("sm"),{gap:6,alignItems:"start"}),n),children:[(0,N.jsx)(en.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",mt:3},children:(0,N.jsx)(L,{})}),(0,N.jsxs)(en.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",mt:3},children:[(0,N.jsx)(J,{}),t&&(0,N.jsx)(Y.Z,{}),(0,N.jsx)(X,{})]})]})}}}]);
//# sourceMappingURL=704.5dd90081.chunk.js.map