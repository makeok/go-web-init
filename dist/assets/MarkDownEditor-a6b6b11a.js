import{M as a}from"./MarkDownEditor-f22e3692.js";import{r as t,o,a as r,f as s,c as i}from"./index-c09751bd.js";import"./MarkDown-286b97f4.js";import"./_commonjsHelpers-de833af9.js";import"./CodeEditor-96962f84.js";const l={class:"flex w-full h-full"},n={class:"w-full m-2"},w={__name:"MarkDownEditor",setup(m){const e=t(`
# Header 1
## Header 2
### Header 3

This is a **markdown** test *demo*.

* xxx
* aaa 

- first item
- second item
- third item

> quote message here <br >
> quote line two

Code demo
\`\`\`go
func main() {
    a, b := 2, 3
    fmt.Println(a+b)
}
\`\`\`

Link example
[qingwave.github.io/](https://qingwave.github.io/)

`);return(d,c)=>(o(),r("div",l,[s("div",n,[i(a,{class:"w-full h-full",data:e.value},null,8,["data"])])]))}};export{w as default};
