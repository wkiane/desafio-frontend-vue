<template>
    <footer id="alt-rodape" class="footer">
        <div class="content has-text-centered">
            <p>©1989 - {{ anoAtual }} - Alterdata Software - Direitos reservados</p>
        </div>
    </footer>
</template>

<script>
import { getYear } from 'date-fns'

export default {
    data: () => ({
        anoAtual: getYear(new Date())
    })
}
</script>

<style>
#alt-rodape {
    position:absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding: 15px 0px 15px;
    width: 100%;
    background-color: black;
    color: #fff;
    border-top: 0;
}
</style>