<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h3>Contact Numbers</h3>
<table border="1">
<tr bgcolor="yellow">
<th>Branch</th>
<th>Phone No.</th>
</tr>
<xsl:for-each select="contact-info/contactnos">
<tr bgcolor="tan">
<td><xsl:value-of select="branch" /></td>
<td><xsl:value-of select="num" /></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>