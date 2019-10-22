<template>
    <div id="main-wrapper">
        <div id="task-wrapper">
            <div id="task-adder">
                <div v-if="$store.state.isOpen" id="task-input-wrapper">
                    <input type="text" id="task-input-title" class="task-input" placeholder="メモのタイトル (必須)" v-model="$store.state.taskTitle">
                    <hr>
                    <textarea id="task-input-detail" class="task-input" placeholder="メモの詳細" v-model="$store.state.taskDetail">
                    </textarea>
                    <b-button @click="addTask" class="task-button" :disabled=" $store.state.taskTitle==='' ">
                        追加
                    </b-button>
                    <b-button @click="inputClose" class="task-button">
                        キャンセル
                    </b-button>
                </div>

                <div v-else>
                    <input type="text" id="task-input-before" class="task-input" placeholder="メモを入力..." @click="openInput">
                </div>
            </div>
            <div id="task-items">
                <div class="task-item" v-for="(task, index) in $store.state.displayedTasks" :key="task.title">
                    <div id="task-item-title">
                        {{ task.title }}
                    </div>
                    <hr>
                    <div id="task-item-content">
                        {{ task.detail }}
                    </div>
                    <div id="task-item-date">
                        {{ task.date }}
                    </div>
                    <b-button @click="deleteTask(index)"  class="task-button">
                        削除
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$form-height:50px;

#main-wrapper{
    background:white;
    margin:0 auto;
    width:80vw;
    padding:10px 5vw;

    #task-wrapper{
        $task-input-width:500px;

        // background:#F8F9FA;
        width:100%;
        padding:20px;

        .task-button{
            margin: 20px 10px 0;
        }

        #task-adder{
            width:100%;
            margin-bottom:20px;
            margin-top:10px;
            
            .task-input{
                display:block;
                width:350px;
                border: none;
                margin:0 auto;
            }

            #task-input-before{
                padding:10px;
                border-radius:10px;
                box-shadow: 0 0 10px gray;
            }

            #task-input-wrapper{
                width:$task-input-width;
                background:white;
                padding:20px;
                margin:0 auto 10px;
                border: none;
                border-radius:10px;
                box-shadow: 0 0 5px gray;

                #task-input-title{
                    font-size:24px;
                }
                #task-input-detail{
                    font-size:20px;
                    height:100px;
                    resize:none;
                }

            }

        }
        #task-items{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;

            .task-item{
                align-items: flex-start;
                background-color: #f1f1f1;
                width: 300px;
                border-radius:5px;
                margin: 10px;
                padding:15px;
                text-align:left;
                line-height: 20px;
                font-size: 20px;

                #task-item-date{
                    font-size:14px;
                    color:gray;
                }
            }
        }
    }
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
    name:"MainCountents",
    
    methods:{
        ...mapActions([
            'addTask',
            'openInput',
            'inputClose',
            'deleteTask'
            ])
    }
}

</script>