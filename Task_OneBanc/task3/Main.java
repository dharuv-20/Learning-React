package task3;
public class Main{

    private static int editDistance(String s1,String s2,int ci,int cd,int cs)
    {
        int m=s1.length();
        int n=s2.length();
        int[][]dp=new int[m+1][n+1];

        for(int i=0;i<=m;i++) dp[i][0]=i*cd;
        for(int j=0;j<=n;j++) dp[0][j]=j*ci;

        for(int i=1;i<=m;i++){
            for(int j=1;j<=n;j++){
                if(s1.charAt(i-1)==s2.charAt(j-1)){
                    dp[i][j]=dp[i-1][j-1];
                }
                else{
                    int insert=dp[i][j-1]+ci;
                    int delete=dp[i-1][j]+cd;
                    int substitute=dp[i-1][j-1]+cs;
                    dp[i][j]=Math.min(Math.min(insert,delete),substitute);
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args){
        String[] dictionary ={"cred","bet","shat","that","brad","cart","brat","card"};
        String input="dat";
        int ci=1,cd=1,cs=1;

        int minDistance=Integer.MAX_VALUE;


        for(String word:dictionary){
            int dist=editDistance(input,word,ci,cd,cs);
            if(dist<minDistance){
                minDistance=dist;
            }
        }

        
        System.out.print("Expected Output:");
        boolean first=true;
        for (String word:dictionary){
            if(editDistance(input,word,ci,cd,cs)==minDistance){
                if(!first) System.out.print(",");
                System.out.print("\""+word +"\"");
                first=false;
            }
        }
        System.out.println();
    }
}
