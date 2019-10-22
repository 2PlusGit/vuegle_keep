<template>
    <div id="bar">
        <div id="header-left">
            <div id="delete-button">
                <b-button pill size="sm" variant="danger" @click="deleteAllTask">全削除</b-button>
            </div>  
        </div>
        <div id="header-middle">
            <div id="text-div">
                <span id="title">
                    <i class="fab fa-vuejs"/>
                    <span id="title-words">uegle Keep</span>
                </span>
            </div>
        </div>
        <div id="header-right">
            <input id="search-form" type="text" @keyup.enter="searchTasks($store.state.searchWord)" v-model="$store.state.searchWord" placeholder="キー入力 + Enter で絞り込み">
        </div>
    </div>
</template>

<style lang="scss">
$title-font-size:36px;
$nav-height:48px;
$icon-size:24px;

#bar{
    justify-items: center;
    align-items: center;
    position:fixed;
    z-index:10;
    top:0;
    left:0;
    margin:auto 0;
    width:100vw;
    height:64px;
    // padding:8px;
    background:#F8F9FA;
    display:grid;
    grid-template:
        "delete title search" 100%
        /1fr    1fr   1fr; 

    #header-left{
        grid-area: delete;
        #delete-button{
            margin-left:0;
        }
    }

    #header-middle{
        grid-area: title;

        #text-div{
            height:$title-font-size;
            top:0;

            #title{
                vertical-align:top;
                font-size:$title-font-size;
                line-height:$title-font-size;
                text-align:center;

                #title-words{
                    text-align:left;
                }
            }
        }
    }

    #header-right{
        grid-area: search;

        button{
            float: right;
            background: #ddd;
            font-size: 17px;
            border: none;
            cursor: pointer;
        }
        #search-form{
            width:300px;
            padding:6px;
            font-size: 17px;
            border: none;
            float:right;
        }

    }
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
    name:"HeaderBar",
    
    methods:{
        ...mapActions([
            'searchTasks',
            'deleteAllTask'
            ])
    }
}
</script>