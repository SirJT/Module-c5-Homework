// XML,  запарсить этот 
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

function xmlToJs(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const students = Array.from(xmlDoc.querySelectorAll('student')).map((studentNode) => {
    const nameNode = studentNode.querySelector('name');
    const firstName = nameNode.querySelector('first');
    const lastName = nameNode.querySelector('second');
    const age = parseInt(studentNode.querySelector('age').textContent);
    const prof = studentNode.querySelector('prof').textContent;
    const lang = nameNode.getAttribute('lang');
// подводим вид как сказано в задании
    return {
      name: `${firstName} ${lastName}`,
      age,
      prof,
      lang,
    };
  });

  return { list: students };
}

const result = xmlToJs(xmlString);
console.log(result);