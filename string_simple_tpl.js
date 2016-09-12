// 阮一峰的博客中讲到的一个简单的模板引擎例子
function compile(template){
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
    `(function parse(data){
        var output = "";

        function echo(html){
            output += html;
        }

        ${ template }

        return output;
    })`;

    return script;
}

var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
// 感觉eval不是很好
var parse = eval(compile(template));
console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));