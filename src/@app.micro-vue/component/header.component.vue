
<template>
  <div>
    <h1>Header</h1>
    <StyledButton>asds</StyledButton>
    <DescStyle>hello</DescStyle>
  </div>
</template>


<script>
import styled from "vue-styled-components";

const StyledButton = styled("button")`
  background-color: #fff;
`;

const DescStyle = styled("p")`
  color: red;
`;

export default {
  name: 'Header',
  components: {
    StyledButton,
    DescStyle
  }
};
</script>

